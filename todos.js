let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let delbtn = document.createElement('button');
let li = document.createElement('li');

btn.addEventListener('click', function () {
    li.innerHTML = inp.value;
    ul.appendChild(li)
    delbtn.innerHTML = "X"
    li.appendChild(delbtn);
});

delbtn.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        li.remove();
        console.log("deleted");

    }
})


