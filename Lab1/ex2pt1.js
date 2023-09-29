//Part 2(a) - arrow function & output
const Part2A = () => {
    return "Data Representation & Querying";
}

Part2A();
console.log(Part2A());

//Part 2(b) - extended arrow, takes and returns argument
const PartB = (myValue) => {
    return myValue;
}

PartB("Part B");
console.log(PartB("Part B"));

//Part 2(c) - arrow function takes 2 numbers and returns sum
const addition = (num1, num2) => {
    return num1 + num2;
}
addition(2, 3);
console.log(addition(2, 3));

//Part 2(d) - function that multiplys each number under 70 by 2
const ages = [25, 31, 42, 77];

let PartD = ages.map((element) => {
    //if statement to multiply
    if (element < 70) {
        return element * 2;
    }
    else {
        return element;
    }
});

console.log(PartD);

//Part 3 - to do list

//3(a) creating an array of strings
let MyTasks = [];

//3(b)creating an add task functin for to do list, also recieving a string
//as a parameter
let addTask = (task) => {
    let length = MyTasks.push(task);
    console.log("Task:" + task + "was added to tasks!!");
    return length;
}

//3(c) using for each to iterate through all elements in array 
let ListAllItems = () => {
    MyTasks.forEach((item) => {
        console.log(item);
    });
}

//3(d) delete task function
let deleteTask = (task) => {
    let index = MyTasks.indexOf(task);
    //if index is 0 its the first in array
    if (index > -1) {
        MyTasks.splice(index, 1);
        console.log("Task" + task + "was deleted from the array");
    }
    // if not found it will return -1
    else {
        console.log("Task " + task + "not found in tasks!!")
    }
    return MyTasks.length;
}

//printing the message to console
addTask("Learn JS!!");
addTask("Learn Python!!");

//printing all elements in array 
ListAllItems();

//printing delete task function
deleteTask("Learn JS!!");









