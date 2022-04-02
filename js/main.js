document.querySelector("#addBtn").addEventListener("click", function(){
    var ul = document.querySelector("ul");
    var lenght = ul.children.length +1;
    var li = document.createElement("li");
    li.innerText = "List " + lenght;
    ul.appendChild(li);
});

document.querySelector("#removeBtn").addEventListener("click", function(){
    var ul = document.querySelector("ul");
    var lenght = ul.children.length +1;
    var li = document.createElement("li");
    var childs = ul.children;
    ul.removeChild(childs[childs.length - 1]);
});

document.querySelector("#tozalash").addEventListener("click", function(){
    var ul = document.querySelector("ul");
    ul.innerHTML = "";
});