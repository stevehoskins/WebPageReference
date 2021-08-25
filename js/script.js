
const numbers = [4, 9, 16, 25];

numbersSqrt = numbers.map(Math.sqrt);
numbersSquared = numbers.map(numbers => numbers * numbers);

document.getElementById("demo0").innerHTML = numbers;
document.getElementById("demo1").innerHTML = numbersSqrt; document.getElementById("demo2").innerHTML = numbersSquared;
document.getElementById("demo3").innerHTML = numbers.map(numbers => numbers  + 10);
document.getElementById("demo4").innerHTML = numbers.map(numbers => ((numbers  + 10) * (numbers + 10)));
