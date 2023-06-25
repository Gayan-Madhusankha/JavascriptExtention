let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click",function(){
    //console.log("Button click from addEventListner")
    myLeads.push(inputEl.value)
    inputEl.value =""
    renderLeads()
})

function renderLeads(){
    let listItems = ""

    for(let i=0; i<myLeads.length;i++){
        listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a></li>"
    }
    
    ulEl.innerHTML = listItems
}


