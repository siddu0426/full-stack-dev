let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// console.log(shoppingList);

//to fetch first item
console.log(shoppingList[0]);


//adding carrots using push
shoppingList.push('carrots');

console.log(shoppingList);

//pop method
shoppingList.pop();

console.log(shoppingList);

//splice method
shoppingList[4].splice(1,2,"Cucumbers","Bell Peppers");

console.log(shoppingList);



let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

//fetch specific name

console.log(student.name);

//adding value to the property

student.phone = "123-456-7890";

console.log(student.phone);


//deletion of grade
delete student.grade;
console.log("After deletion :", student);


//modification of age
student.age = '21';
console.log(student);


function checkNumber(num)
{
    if(num > 0) console.log("positive");
    else if(num == 0) {
        console.log("Zero");
    }
    else{
        console.log("Negative");
    }
}

checkNumber(0);
checkNumber(20);
checkNumber(-2);

function grades(score)
{
    if(score >= 90 && score <= 100) console.log("A");
    else if(score >= 80 && score <= 89) console.log("B");
    else if(score >= 70 && score <= 79) console.log("C");
    else if(score >= 60 && score <= 69) console.log("D");
    else {
        console.log("F");
    }
}

grades(40);
grades(91);
grades(81);
grades(79);
grades(60);



function checkString(string)
{
    return string ? "Truthy" : "Falsy";
}

console.log(checkString("H"));  //truthy
console.log(checkString(""));   //falsy