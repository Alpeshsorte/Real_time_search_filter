const base_Url="http://localhost:3000"
const endPoint="products"
const per_page=5;
let page=1;
let btnStat=false
let paginationBtn=document.getElementById("paginationBtn")

getData(page)

async function getData(value){
      
    let data= await fetch(`${base_Url}/${endPoint}?_page=${value}&_per_page=${per_page}`)
    
 let actualData= await data.json()

 if(!btnStat)
 {
         makebtn(actualData.pages)
         btnStat=true
 }
  
    // console.log(actualData.data)
    map_data(actualData.data)
} 


function makebtn(count){

    for(let i=1;i<=count;i++){
         
        let btn=document.createElement("button")
        btn.innerText=i
        btn.value=i
        btn.addEventListener("click",changePage)
        paginationBtn.append(btn)
    }
}


function changePage(e){
    
    let btnVal=e.target.value

    getData(btnVal)
}

function map_data(arr){
    let container=document.getElementById("container")
    container.innerHTML=""

    arr.forEach((el)=>{
        let card=document.createElement("card")
        card.className="card"

        let image=document.createElement("img")
        image.src=el.image

        let title=document.createElement("h1")
        title.textContent=el.title

        let price=document.createElement("h2")
        price.innerText=el.price

        let description=document.createElement("h6")
        description.textContent=el.description

        let category=document.createElement("h2")
        category.textContent=el.category

        let rating=document.createElement("h4")
        rating.innerText=`${el.rating.rate} (${el.rating.count})`

        card.append(image,title,price,description,category,rating)

        container.append(card)
        
    })

}
