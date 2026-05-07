let userForm = document.getElementById("userForm")
let updateForm = document.getElementById("updateForm")

let getBtn = document.getElementById("getBtn")
let delBtn = document.getElementById("delBtn")

let searchBtn = document.getElementById("searchBtn")
let showAll = document.getElementById("showAll")

let container = document.getElementById("container")

let BASE_URL = "http://localhost:3000/user"

// GET ALL USERS

async function getAllUsers() {

    let res = await fetch(BASE_URL)

    let data = await res.json()

    showData(data)
}

getAllUsers()


// ADD USER

userForm.addEventListener("submit", addUser)

async function addUser(event) {

    event.preventDefault()

    let obj = {
        image: userForm.uimage.value,
        name: userForm.uname.value,
        age: Number(userForm.uage.value),
        city: userForm.ucity.value
    }

    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })

    alert("User Added")

    userForm.reset()

    getAllUsers()
}

// GET SINGLE USER

getBtn.addEventListener("click", getSingleUser)

async function getSingleUser() {

    let id = document.getElementById("userId").value

    let res = await fetch(`${BASE_URL}/${id}`)

    let data = await res.json()

    updateForm.uimage.value=data.image
    updateForm.uname.value = data.name
    updateForm.uage.value = data.age
    updateForm.ucity.value = data.city
}

// UPDATE USER

updateForm.addEventListener("submit", updateUser)

async function updateUser(event) {

    event.preventDefault()

    let id = document.getElementById("userId").value

    let obj = {
        image:updateForm.uimage.value,
        name: updateForm.uname.value,
        age: Number(updateForm.uage.value),
        city: updateForm.ucity.value
    }

    await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })

    alert("User Updated")

    updateForm.reset()

    getAllUsers()
}

// DELETE USER

delBtn.addEventListener("click", deleteUser)

async function deleteUser() {

    let id = document.getElementById("delId").value

    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })

    alert("User Deleted")

    getAllUsers()
}

// SEARCH

searchBtn.addEventListener("click", searchUser)

async function searchUser() {

    let type = document.getElementById("type").value

    let value = document.getElementById("searchInp").value.trim()

    let res

    if(type === "age"){
        res = await fetch(`${BASE_URL}?age=${value}`)

    }else{
        res = await fetch(`${BASE_URL}?${type}_like=${value}`)
    }

    let data = await res.json()

    if(data.length === 0) {
        alert("No User Found")
        return
    }

    showData(data)
}


// SHOW ALL

showAll.addEventListener("click", getAllUsers)

// SHOW DATA

function showData(arr) {

    container.innerHTML = ""

    arr.forEach((el) => {

        let card = document.createElement("div")
        card.className = "card"

        let img=document.createElement("img")
        img.src=el.image

        let id = document.createElement("h3")
        id.innerText = `ID : ${el.id}`

        let name = document.createElement("h2")
        name.innerText = el.name

        let age = document.createElement("p")
        age.innerText = `Age : ${el.age}`

        let city = document.createElement("p")
        city.innerText = `City : ${el.city}`

        card.append(id, img, name, age, city)

        container.append(card)
    })
}


let sortBtn = document.getElementById("sortbtn")

sortBtn.addEventListener("click", sortData)

async function sortData(){

    try {

        let condition = document.getElementById("condition").value

        let value = document.getElementById("sortValue").value

        if(value === ""){
            alert("Please Enter Value")
            return
        }

        let res

        if(condition === "eq"){

            res = await fetch(`http://localhost:3000/user?age=${value}`)

        }
        else if(condition === "ne"){

            res = await fetch(`http://localhost:3000/user?age_ne=${value}`)

        }
        else{

            res = await fetch(`http://localhost:3000/user?age_${condition}=${value}`)
        }

        let data = await res.json()

        console.log(data)

        if(data.length === 0){
            alert("No User Found")
        }

    } catch(error){

        console.log(error)
    }
}