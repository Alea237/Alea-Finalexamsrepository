


// PART 1: Class and Objects

// step 1. Define the Class and Constructor 
// a).We start by defining the 'product' class and its constructor, which initializes the properties 'name', 'price', and 'quantity'.
// b).Implement updatePrice Method
// c). Implement sellProduct Method
// d). Implement restockProduct Method

class product {
    constructor(name, price, quantity) {
        this.name = name;                  // Name of the product
        this.price = price;                // Price of the product
        this.quantity = quantity;          // Quantity available in stock
    }

    updatePrice(newPrice) {
        this.price = newPrice;             // Update to new price
    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Error: Not enough stock available.";    // Insufficient stock error messane
        }
        this.quantity -= quantity;                          // Reduce stock by sold by sold amount
        return quantity * this.price;                       // Reture tatal sale value 
    }

    restockProduct(quantity) {
        this.quantity += quantity;                          // Increase stock by restocked amount
    }
}

// Here's how you can use the ' product ' class

const apple = new product("Apple", 0.5, 100); // Create a new product instance

console.log(apple.sellProduct(10));    // Sell 10 apples - should log total sale amount (5)
console.log(apple.quantity);            // Check remaining stock - should log 90


apple.updatePrice(0.6);                 // Update price to $0.6

console.log(apple.sellProduct(200)); // Attempt to sell more than available - should log error message

apple.restockProduct(50);            // Restock with 50 more apples 

console.log(apple.quantity);          // check update stock - should 140



// PART 2: Arrays & Sets: 

// Q2.
function findUniqueWords(words) {
    // Create a set from the input array to remove duplicates
    const uniqueWordsSet = new set(words);

    // convert the set back into an array
    const uniqueWordsArray = [...uniqueWordsSet];

    // Return the array of unique words
    return uniqueWordsArray;

}

//Example Usage:
const words = ["apple", "bananas", "apple", "orange", "bananas"];
console.log(findUniqueWords(words));  // Return ["apple", "bananas", "orange"]

// Q3. Arrays & sets

function commonElements(array1, array2) {
    // set 1: create a set from the first array
    const set1 = new set(array1);

    //set 2: Initialize an empty array to hold common elements
    const common = [];

    // step3: Iterate through the second array
    for (const element of array2) {
        //set 4: check if the element exists in set1
        if (set1.has(element)) {
            // step 5: If it does, add it to the common element array
            common.push(element);
        }
    }

    // Return the result containing common elements
    return common;
}

// Example Usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(commonElements(array1, array2));  // Return [3, 4]

// PART 3: MAPS 

class studentsGrades {
    constructor() {
        this.grades = new Map(); // Initiation the Map to store student grades
    }

        addGrade(studentName, grade) {
        this.grades.set(studentName, grage); // add or update the student's grade
        console.log('Added/Updated ${studentName} with grade ${grade}');
    }

        getGrade(studentName) {
        if (this.grade.has(student)) { // check if the student exists
            const grade = this.grade.get(studentName);
            console.log('GraDE for ${studentName}: ${grade}');
            return grade; // Return the student's grade

        } else {
            console.log('${studentName} not found.');
            return null; // Return null if student not found
        }
    }

        updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) { // check if the student exists
            this.grades.set(studentName, newGrade); // Update the student's grade
            console.log('Updated ${studentName}'s grade to ${newGrade});
        } else {
            console.log('studentName} not found. Cannot update.')
        }
    }

        removesStudent(studentName) {
        if (this.grades.delete(studentName)) { // Remove the student from Map
            console.log('Removed ${studentName} from records.');
        } else {
            console.log('${studentName} not found. Cannot remove.');
        }
    }
}

// Example Usage:
const studentGrades = new studentGrades();
studentGrades.addGrades("John", 85);
studentGrades.addGrades("Jane", 90);
studentGrades.addGrades("John", 88);
studentGrades.addGrades("Jane",);


// PART 4. 
// Q5. CyberSecurity

function validatePassword(password) {
    // check if password is at least 8 characters long
    const isLongEnough = password.length >= 8;

    // check for at least one special character
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Return true only if both conditions are satisfied
    return isLongEnough && hasSpecialCharacter;
}

// Example usage:

console.log(validatePassword("password123")); // Return false
console.log(validePassword("p@ssword!"));     // Return true


// PART 5:
// Q6). GitHub Submission Requirements:



