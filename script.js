let users=[
    {
        name:"alpesh sorte",
        age:23,
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0XZ3VwZvR4FXsOTPE--BiHaTlf0EDDqwuQ&s",
        bio:"it is a software developer"
    },
     {
        name: "Riya Sharma",
        age:43,
        pic: "https://randomuser.me/api/portraits/women/2.jpg",
        bio: "Frontend developer and UI designer"
    },
    {
        name: "Aman Verma",
        age:67,
        pic: "https://randomuser.me/api/portraits/men/3.jpg",
        bio: "Backend developer working with Node.js"
    },
    {
        name: "Sneha Patil",
        age:56,
        pic: "https://randomuser.me/api/portraits/women/4.jpg",
        bio: "Full stack developer and problem solver"
    },
    {
        name: "Rahul Singh",
        age:23,
        pic: "https://randomuser.me/api/portraits/men/5.jpg",
        bio: "Python developer and data analyst"
    },
    {
        name: "Pooja Mehta",
        age:65,
        pic: "https://randomuser.me/api/portraits/women/6.jpg",
        bio: "UI/UX designer with creative mindset"
    },
    {
        name: "Vikas Yadav",
        age:78,
        pic: "https://randomuser.me/api/portraits/men/7.jpg",
        bio: "Java developer building enterprise apps"
    },
    {
        name: "Neha Kapoor",
        age:34,
        pic: "https://randomuser.me/api/portraits/women/8.jpg",
        bio: "React developer passionate about web apps"
    },
    {
        name: "Karan Patel",
        age:45,
        pic: "https://randomuser.me/api/portraits/men/9.jpg",
        bio: "Mobile app developer using Flutter"
    },
    {
        name: "Anjali Desai",
        age:54,
        pic: "https://randomuser.me/api/portraits/women/10.jpg",
        bio: "Tech enthusiast and software tester"
    }
];

function showusers(arr){
    arr.forEach(function(user){
        let card=document.createElement("div")
        card.classList.add("card")

        let img=document.createElement("img")
        img.src=user.pic
        img.classList.add("bg-img");

        let blurred_layer=document.createElement("div")
        blurred_layer.style.backgroundImage=user.pic;
        blurred_layer.classList.add("blurred_layer")

        let content=document.createElement("div")
        content.classList.add("content")

        let name=document.createElement("h3")
        name.textContent=user.name

        let age=document.createElement("h3")
        age.textContent=user.age

        let p=document.createElement("p")
        p.textContent=user.bio

        content.appendChild(name);
        content.appendChild(p);
        content.appendChild(age)

        card.appendChild(img)
        card.appendChild(blurred_layer)
        card.appendChild(content)

        document.querySelector(".cards").appendChild(card)

    })

}
showusers(users)


let inp=document.querySelector("#inp")
inp.addEventListener("input", check)

function check() {
    let value = inp.value.toLowerCase().trim();

    let newusers = users.filter((user) => {
        return user.name.toLowerCase().includes(value);
    });

    let container = document.querySelector(".cards");
    let msg = document.querySelector("#notFound");

    container.innerHTML = "";

    if (value !== "" && newusers.length === 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        showusers(newusers.length ? newusers : users);
    }
}

let search=document.querySelector("#search")
search.addEventListener("click", select_val)


function select_val(){
    let age=search.value

}