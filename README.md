Real-Time Search Filter in DOM (Complete Guide)
A Real-Time Search Filter is a feature that filters data immediately while the user types in an input box. There is no need to click a Search button.
Examples:
Gmail filters emails while typing.
YouTube filters videos.
Amazon filters products.
Contact lists filter names instantly.
How Real-Time Search Works
The process consists of four steps:
User Types
      │
      ▼
input event fires
      │
      ▼
Read input value
      │
      ▼
Compare with every item
      │
      ▼
Show matching items
Hide non-matching items
Concepts Required
Before creating a real-time search filter, you should know:
DOM
querySelector()
querySelectorAll()
getElementById()
addEventListener()
input event
textContent
innerText
toLowerCase()
includes()
forEach()
style.display
HTML Example
HTML
<input type="text" id="search" placeholder="Search...">

<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Orange</li>
    <li>Grapes</li>
</ul>
JavaScript
let search = document.getElementById("search");
let items = document.querySelectorAll("#list li");

search.addEventListener("input", function () {

    let value = search.value.toLowerCase();

    items.forEach(function(item){

        let text = item.textContent.toLowerCase();

        if(text.includes(value)){
            item.style.display = "list-item";
        }
        else{
            item.style.display = "none";
        }

    });

});
Step-by-Step Explanation
Step 1
Select the input.
let search = document.getElementById("search");
Step 2
Select all items.
let items = document.querySelectorAll("#list li");
querySelectorAll() returns a NodeList.
[
<li>Apple</li>,
<li>Banana</li>,
<li>Mango</li>,
...
]
Step 3
Listen for typing.
search.addEventListener("input", function(){

});
The "input" event runs every time the user:
types
deletes
pastes
cuts text
Unlike "change", it doesn't wait until the input loses focus.
Step 4
Get the search text.
let value = search.value.toLowerCase();
Example:
User types:
Ap
After toLowerCase():
ap
This makes the search case-insensitive.
Step 5
Loop through all items.
items.forEach(function(item){

});
Each item is checked one by one.
Step 6
Read item text.
let text = item.textContent.toLowerCase();
If item is:
HTML
<li>Apple</li>
then
text = "apple"
Step 7
Compare
text.includes(value)
Example:
text = "apple"

value = "ap"
"apple".includes("ap")
Output:
true
Example:
text = "banana"

value = "ap"
Output:
false
Step 8
Show or hide
if(text.includes(value)){
    item.style.display="list-item";
}
else{
    item.style.display="none";
}
Matching items remain visible, while non-matching items are hidden.
Flow Diagram
User types

     "ap"

        │

        ▼

Loop over all items

Apple

contains "ap"

Show

Banana

doesn't contain "ap"

Hide

Mango

doesn't contain "ap"

Hide

Grapes

contains "ap"

Show
Result:
Apple
Grapes
Why Use toLowerCase()?
Without it:
Apple
Searching:
apple
returns false because JavaScript is case-sensitive.
With:
toLowerCase()
both become:
apple
and the comparison succeeds.
Why Use includes()?
includes() checks whether one string exists inside another.
"apple".includes("ap")
Output:
true
"apple".includes("pp")
Output:
true
"apple".includes("xy")
Output:
false
Using filter() Instead
Instead of hiding elements, you can create a new array of matching data.
let fruits = ["Apple","Banana","Mango","Orange"];

let result = fruits.filter(function(item){
    return item.toLowerCase().includes("an");
});

console.log(result);
Output:
["Banana","Orange","Mango"]
This approach is useful when working with arrays or API data.
Search Multiple Fields (Objects)
let users = [
    {name:"Alpesh", city:"Nagpur"},
    {name:"Rahul", city:"Pune"},
    {name:"Rohit", city:"Mumbai"}
];
let result = users.filter(function(user){

    return user.name.toLowerCase().includes(search) ||
           user.city.toLowerCase().includes(search);

});
This searches both the name and city fields.
Searching Table Rows
HTML
<input id="search">

<table>

<tr>
<td>Alpesh</td>
<td>Nagpur</td>
</tr>

<tr>
<td>Rahul</td>
<td>Pune</td>
</tr>

</table>
let rows = document.querySelectorAll("table tr");

search.addEventListener("input", function(){

    let value = this.value.toLowerCase();

    rows.forEach(function(row){

        let text = row.textContent.toLowerCase();

        row.style.display =
            text.includes(value) ? "" : "none";

    });

});
Search Product Cards
let cards = document.querySelectorAll(".card");

search.addEventListener("input", function(){

    let value = this.value.toLowerCase();

    cards.forEach(function(card){

        let title = card.querySelector("h3")
                        .textContent
                        .toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});
Performance Tips
For small lists (up to a few hundred items), the simple approach works well. For very large datasets:
Use debouncing (wait ~300 ms after typing before filtering).
Avoid repeated DOM queries; cache elements.
Use DocumentFragment or virtual rendering if re-rendering many elements.
For server-side data, send the search query to an API instead of loading everything into the browser.
Common Mistakes
Using "change" instead of "input" for real-time filtering.
Forgetting toLowerCase(), making the search case-sensitive.
Using querySelector() instead of querySelectorAll() when multiple items should be searched.
Forgetting to loop through all items with forEach().
Using the wrong display value (for example, "block" on table rows instead of "" or "table-row").
Real-World Uses
Product search in e-commerce sites
Contact lists
Employee directories
Student records
Movie and music libraries
Notes and to-do apps
Admin dashboards
File explorers
Blog search
Inventory management systems
Interview Questions
What is a real-time search filter?
Why is the "input" event preferred over "change"?
Why do we use toLowerCase()?
What does includes() do?
What is the difference between querySelector() and querySelectorAll()?
How do you filter table rows in JavaScript?
What is the difference between filtering DOM elements and filtering arrays with filter()?
How can you optimize a search filter for thousands of records?
What is debouncing, and why is it useful?
How would you implement a real-time search for data coming from an API?
Mastering these concepts will enable you to build search functionality for lists, tables, cards, dashboards, and CRUD applications using only HTML, CSS, and JavaScript.
