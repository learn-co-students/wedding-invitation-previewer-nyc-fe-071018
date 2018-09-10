//On Click Formal Transitions
document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("keydown", (event) => {
    let element = document.getElementById("sideDisplay");
    element.classList.remove("hideonload");
    
    const sideDisplay= document.getElementById('sideDisplay')
    sideDisplay.classList.add('formalDisplay')
    sideDisplay.classList.remove('springDisplay','artdecoDisplay')
  
    const writeUp= document.getElementById('writeUp')
    writeUp.classList.add('formalWriteUp')
    writeUp.classList.remove('springWriteUp','artdecoWriteUp')
  
    formal.classList.add('formalButton')
    artdeco.classList.remove('artdecoButton')
    spring.classList.remove('springButton')
    }) 
  });
 
//On Click Formal Transitions

const formal = document.querySelector("#formal");
formal.addEventListener("click", (event) =>{
  const sideDisplay= document.getElementById('sideDisplay')
  sideDisplay.classList.add('formalDisplay')
  sideDisplay.classList.remove('springDisplay','artdecoDisplay')
  
  const writeUp= document.getElementById('writeUp')
  writeUp.classList.add('formalWriteUp')
  writeUp.classList.remove('springWriteUp','artdecoWriteUp')
  
  formal.classList.add('formalButton')
  artdeco.classList.remove('artdecoButton')
  spring.classList.remove('springButton')
})

//On Click Spring Transitions

const spring = document.querySelector("#spring");
spring.addEventListener("click", (event) =>{
 
  const sideDisplay= document.getElementById('sideDisplay')
  sideDisplay.classList.add('springDisplay')
  sideDisplay.classList.remove('formalDisplay','artdecoDisplay')
  
  const writeUp= document.getElementById('writeUp')
  writeUp.classList.add('springWriteUp')
  writeUp.classList.remove('artdecoWriteUp','formalWriteUp')
  
  
  spring.classList.add('springButton') 
  artdeco.classList.remove('artdecoButton')
  formal.classList.remove('formalButton')
  

})

//On Click Art Deco Transitions
const artdeco = document.querySelector("#artdeco")
artdeco.addEventListener("click", (event) =>{
  const sideDisplay= document.getElementById('sideDisplay')
  sideDisplay.classList.add('artdecoDisplay')
  sideDisplay.classList.remove('formalDisplay','springDisplay')
  
  const writeUp= document.getElementById('writeUp')
  writeUp.classList.add('artdecoWriteUp')
  writeUp.classList.remove('springWriteUp','formalWriteUp')
  
  artdeco.classList.add('artdecoButton')
  formal.classList.remove('formalButton')
  spring.classList.remove('springButton')
})

// Transitions for the Form

const firstNameOne= document.getElementById("firstName1")
const firstInitial= document.getElementById("firstInitial")
firstNameOne.addEventListener("keyup", (event)=>{
    const input = firstNameOne.value;
    const firstInitial= input.slice(0,1);
    document.getElementById("firstNameOne").innerHTML = `${input} &`;
    document.getElementById("firstInitial").innerHTML = `${firstInitial}&nbsp;&nbsp;&#x2665;`;
})

const firstNameTwo= document.getElementById("firstName2")
const secondInitial= document.getElementById("secondInitial")
firstNameTwo.addEventListener("keyup", (event)=>{
    const input = firstNameTwo.value;
    const secondInitial= input.slice(0,1);
    document.getElementById("firstNameTwo").innerHTML = input;
    document.getElementById("secondInitial").innerHTML = `&nbsp;${secondInitial}`;
})

const lastName= document.getElementById("lastName")
lastName.addEventListener("keyup", (event)=>{
    const input = lastName.value;
    document.getElementById("lastNameDisplay").innerHTML = input;
})

const date= document.getElementById("date")
date.addEventListener("keyup", (event)=>{
    const input = date.value;
    document.getElementById("weddingDate").innerHTML = input;
})

const address= document.getElementById("address")
address.addEventListener("keyup", (event)=>{
    const input = address.value;
    document.getElementById("weddingLocation").innerHTML = input;
})
