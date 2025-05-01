//1, Implement code

  // a,
function computeSumOfSquares(arr) {
    return arr.map((element) => element * element) .reduce((sum, current) => sum + current, 0);
}

// b
function printOddNumbersOnly(arr) {
    return  arr.filter((element) => element % 2 == 1);
}

//c

function printFibo(n, a, b) {
    let arr = [];
    let temp = a;
    for (let i = 0; i < n; i++) {
        arr.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }
    return arr;
}

//2. Destructuring assignment:

"use strict";

let user = { name: "John", years: 30 };
let { name, years: age, isAdmin = false } = user;


//3. Array and its methods, and Object literal assignment:

    function addBook(title, author, ID) {
    const exists = libraryBooks.some(book => book.ID === ID);
    if (exists) return null;

    const newBook = { title, author, ID };
    libraryBooks.push(newBook);
    return newBook;
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
    return libraryBooks
        .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()))
        .sort((a, b) => a.ID - b.ID);
}


//4. Implement following functions in data.js and test those in script.js:

// data.js
let data = [];
export function get_items() {
    return data;
}

export function add_item(new_item) {
// add item (if id does not exist)
// return true if item is added successfully, false otherwise
    const exists = data.some(item => item.id === new_item.id);
    if (exists) return false;

    data.push(new_item);
    return true;
}

export function update_item_title_by_id(id, new_title) {
// update the title (if id exist)
// return true if item is update successfully, false otherwise
    const item = data.find(item => item.id === id);
    if (!item) return false;

    item.title = new_title;
    return true;
}

export function delete_item_by_id(id) {
// delete the item (if id exist)
// return true if item is deleted successfully, false otherwise
    const initialLength = data.length;
    data = data.filter(item => item.id !== id);
    return data.length !== initialLength;
}

export function get_item_title_by_id(id) {
// return the item title by id (if id exist)
    const item = data.find(item => item.id === id);
    return item ? item.title : undefined;
}