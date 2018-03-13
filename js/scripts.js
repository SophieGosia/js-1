// script.js

// wyskakujące okienko pytające o imię
var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);


// ZADANIE - pole trójkąta
// Pole trójkąta automatyczne
var a = 4;
var h = 6;

var traingleArea = a * h / 2;

console.log('Pole trójkąta wynosi:', traingleArea);

// Pole trójkąta z prompt
var a = prompt("Enter triangle base 'a' ");
var h = prompt("Enter triangle height 'h' ");

var traingleArea = a * h / 2;

console.log('Pole trójkąta wynosi:', traingleArea);

// ZADANIE - Instrukcje warunkowe w pratyce
var a = prompt("enter value 'a'");
var b = prompt("enter value 'b'");

var value = (a * a) - (2 * a * b) - (b * b);

console.log('Value is', value);

if (value > 0) {
    console.log('wynik dodatni'); //kod wyświetlony jeśli true
} else if (value == 0) {
    console.log('zero') //kod do wyświetlenia jeśli true
} else {
    console.log('wynik ujemny'); // kod do wyświetlenia jeśli oba powyższe false
}
