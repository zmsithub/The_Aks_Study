let todos = [];


let req = prompt("enter your request(list, add, delete, exit)")


while (true) {
    if (req === "quit") {
        console.log("You quiting app....");
        break;

    }


    if (req === "list") {
        console.log("------------------");

        if (todos.length == 0) {
            console.log("your todos list is empty");

        } else {
            for (let i = 0; i < todos.length; i++) {
                console.log(i, todos[i]);

            }

        }
        console.log("------------------");

    }
    if (req === "add") {
        let add = prompt("add new todo");

        todos.push(add);
        console.log("your todo is added");
        
    }
    req = prompt("enter your request(list, add, delete, exit)")

}




































