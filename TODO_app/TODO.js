let ip = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = ip.value;
    list.appendChild(item);

    let b = document.createElement("button");
    b.innerText = "delete";
    b.classList.add("del");
    item.appendChild(b);

    ip.value = " ";
});

//event delegation and event bubbling is used
list.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        alert("Task deleted");
    }

});