var list = document.getElementById('list')

function addTodo(){
  var todo=  document.getElementById("todo")
    //create li tag
  var li = document.createElement('li')
  var litext = document.createTextNode(todo.value)
  li.appendChild(litext)
   
  //create deletebtn
  var delBtn = document.createElement("button")
  var deltext = document.createTextNode("Delete")
  delBtn.setAttribute("class" , "btn")
  delBtn.setAttribute("onclick" ,"delItem(this)")
  delBtn.appendChild(deltext)

  //create Edit btn
  var editbtn = document.createElement("button")
  var edittext = document.createTextNode("EDIT")
  editbtn.appendChild(edittext)
  editbtn.setAttribute("class" , "btn")
  editbtn.setAttribute("onclick" ,"editBtn(this)")

  li.appendChild(delBtn)
  li.appendChild(editbtn)

  list.appendChild(li)
  todo.value=""
    
}
function delItem(p){
  p.parentNode.remove()
  console.log(p)
}
function editBtn(e){
   
  var editValue = prompt("Enter edit value" , e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = editValue

}
function deleteAll(){
  list.innerHTML = ""
}