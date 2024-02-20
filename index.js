const toDoInput = document.querySelector(".toDoInput")
const addBtn = document.querySelector(".addBtn")
const listBox = document.querySelector(".listBox")
const title = document.querySelector(".title")
const toDoInputLabel = document.querySelector(".toDoInputLabel")

title.addEventListener("click",function(){

  window.location.reload()

})


toDoInput.addEventListener("click",function(){

  const clickedClass = "active";
  toDoInputLabel.classList.toggle(clickedClass);

})

addBtn.addEventListener("click",function(){

  const clickedClass = "active";
  toDoInputLabel.classList.toggle(clickedClass);

  if(toDoInput.value == ""){

    alert("내용이 없습니다.")

  }else{
    const item = document.createElement("li")
    const checkBoxImg = document.createElement("img");
    checkBoxImg.setAttribute("class","checkBoxImg");
    const checkBox = document.createElement("div")
    checkBox.setAttribute("class","checkBox");
    const text = document.createElement("span")
    text.textContent = toDoInput.value
    const delBtn =  document.createElement("button")
    delBtn.setAttribute("class","delBtn");

    item.appendChild(checkBoxImg)
    item.appendChild(checkBox)
    item.appendChild(text)
    item.appendChild(delBtn)
    listBox.appendChild(item)
    
    toDoInput.value = " "

  
    checkBox.addEventListener("click", function(e) {
  
    if (checkBox.classList.contains("check")) {

      text.style.textDecoration = "none";
      checkBox.classList.remove("check");
      checkBox.classList.add("checkR");
      
      }else{

      text.style.textDecoration = "line-through";
      checkBox.classList.remove("checkR");
      checkBox.classList.add("check");
   

      }

    });

    delBtn.addEventListener("click",function(){
      listBox.removeChild(item)
    })

  }
  
})