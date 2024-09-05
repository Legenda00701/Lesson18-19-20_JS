//1

// let number = prompt("Число:")
// if(number%2 === 0){
//     console.log("Число четное");
// } else{
//     console.log("Число нечетное");
// }


//2

// let num1 = prompt("Первое число:");
// let num2 = prompt("Второе число:");

// if(num1 > num2){
//     console.log(num1 + " больше " + num2);
// } else if(num2 > num1){
//     console.log(num2 + " больше " + num1);
// } else{
//     console.log("Числа равны!");
// }


//3

// let year = prompt("Какой год?");

// if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
//     console.log(year + " - високосный год");
// } else{
//     console.log(year + " - не високосный год");
// }


//4

// let variable = true;

// if(typeof variable === 'string'){
//     console.log('Переменная является строкой.');
// } else if(typeof variable === 'number'){
//     console.log('Переменная является числом.');
// } else{
//     console.log('Переменная не является строкой или числом.');
// }


//5

// let hour = prompt("Сколько сейчас время");

// if(hour >= 6 && hour < 12){
//     console.log("Доброе утро");
// } else if(hour >= 12 && hour < 18){
//     console.log("Добрый день");
// } else if(hour >= 18 && hour < 24){
//     console.log("Доброй ночи");
// } else{
//     console.log("Введенное время некорректно");
// }


//6

// let num1 = prompt("Первое число");
// let num2 = prompt("Второе число");
// let num3 = prompt("Третье число");

// if(num1 >= num2 && num1 >= num3){
//     console.log("Самое большое число: " + num1);
// } else if(num2 >= num1 && num2 >= num3){
//     console.log("Самое большое число: " + num2);
// } else{
//     console.log("Самое большое число: " + num3);
// }


//7

// let login = "admin";
// let password = "1234";

// let inputLogin = prompt("Введите логин:");
// let inputPassword = prompt("Введите пароль:");

// if(inputLogin === login && inputPassword === password){
//     console.log("Вы успешно вошли!");
// } else{
//     console.log("Неправильный логин или пароль!");
// }


//8

// let dayOfWeek = prompt("Какой сегодня день нудели? Ведите число от 1 до 7:");

// if(dayOfWeek == 1){
//     console.log("Это понедельник");
// } else if(dayOfWeek == 2){
//     console.log("Это вторник");
// } else if(dayOfWeek == 3){
//     console.log("Это среда");
// } else if(dayOfWeek == 4){
//     console.log("Это четверг");
// } else if(dayOfWeek == 5){
//     console.log("Это пятница");
// } else if(dayOfWeek == 6){
//     console.log("Это суббота");
// } else if(dayOfWeek == 7){
//     console.log("Это воскресенье");
// } else{
//     console.log("Введенное число не соответствует дням недели");
// }



//9

// let age = prompt("Сколько вам лет?"); 

// if(age < 12){
//     console.log("Детский возраст");
// } else if(age >= 12 && age < 18){
//     console.log("Подростковый возраст");
// } else if(age >= 18 && age < 65){
//     console.log("Взрослый возраст");
// } else{
//     console.log("Пожилой возраст");
// }


//10

// let month = parseInt(prompt("Введите номер месяца (от 1 до 12):"));

// if(month === 1 || month === 2 || month === 12){
//     console.log("Зима");
// } else if(month >= 3 && month <= 5){
//     console.log("Весна");
// } else if(month >= 6 && month <= 8){
//     console.log("Лето");
// } else if(month >= 9 && month <= 11){
//     console.log("Осень");
// } else{
//     console.log("Некорректный месяц");
// }
