let a = 10;
alert(a);

let releaseIphone = 2007;
alert(releaseIphone);

let javaScriptCreator = 'Brendan Eich';
alert(javaScriptCreator);

let num1 = 10;
let num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

let result = 2**5;
alert(result);

a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

const user = { 
    name: 'John Smith', 
    age: 30, 
    isAdmin: true 
};
user['city of residence'] = 'New York';
user.age = 32;
delete user['city of residence'];
let info = prompt('age');
alert(user[info]);

let userName = prompt('Ваше имя');
alert(`Привет, ${userName}!`);
