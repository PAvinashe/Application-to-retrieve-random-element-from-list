var memberList = [];

var selectionList = [];

starts();

function Memberfetch() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        memberList = data;
        localStorage.setItem('member1', JSON.stringify(memberList)); 
    })     
}

  
starts();

function starts(){
    if((JSON.parse(localStorage.getItem('member1'))) == null){

        Memberfetch(); 
        document.getElementById('counter').innerHTML=memberList.length; 

    }
    else{
        
        memberList = JSON.parse(localStorage.getItem('member1'));       
        document.getElementById('counter').innerHTML=memberList.length; 
          
    }
}

//var user = [];
var detetedItem = {}; 
var currentElement = {};
let newmemberList;
localStorage.setItem('member2', JSON.stringify(selectionList));   


function renderList(){   
      if(memberList.length==0){
        document.getElementById('counter').innerHTML='Nothing to retrieve';
        return;
        
      }
      
    //   let newmemberList = localStorage.getItem('member1');
    //    memberList = JSON.parse(newmemberList);
      var newItem = Math.floor(Math.random() * memberList.length);
      var newList = memberList[newItem];
      document.getElementById('detail1').innerHTML= newList.name;   
      document.getElementById('detail2').innerHTML= newList.username;       
      document.getElementById('detail3').innerHTML= newList.phone; 
      document.getElementById('detail4').innerHTML= newList.website; 
      document.getElementById('detail5').innerHTML= newList.company; 
      document.getElementById('detail6').innerHTML= newList.email;  
      document.getElementById('detail7').innerHTML= newList.id;                     
                         
    detetedItem = memberList.splice(newItem,1);
    selectionList.push(detetedItem); 
    if(memberList.length==0){
        document.getElementById('counter').innerHTML='List is empty';
        return;
      }
       else{
        document.getElementById('counter').innerHTML=memberList.length;
      }    
           
    localStorage.setItem('member1', JSON.stringify(memberList));
    localStorage.setItem('member2', JSON.stringify(selectionList));      
   

    
    
      starts();
  };
  //console.log(memberList);  


const new_list = document.getElementById("selected");
 
function showList(item){
    const listofMember = document.createElement("div");
    listofMember.innerHTML = `<div class="member">
                        <p>Name: <span>${item.name}</span><br>
                        UserName: <span>${item.username}</span><br>
                        Phone: <span>${item.phone}</span><br>
                        Website:  <span>${item.website}</span><br>
                        Company: <span>${item.company}</span><br>
                        Email: <span>${item.email}</span><br>
                        Id: <span>${item.id}</span></p>
                      </div>`;
      return listofMember;
 }
 
    
    let newMemList = localStorage.getItem('member2'); 
    selectionList = JSON.parse(newMemList);
    for(var i = 0; i < selectionList.length; i++){
        currentElement = selectionList[i];
    
        var newElement = showList(currentElement);
        new_list.appendChild(newElement);
    }  

    