function even_or_odd(n) {
    if(n % 2 === 0)
    {
      console.log('Even');
    } else {
      console.log('Odd');
    }
  } 
  even_or_odd(3);
//##################################################
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
//###############################################.
let str = 'welcome';
let splitStr = str.split('');
let reversedArr = splitStr.reverse();
let reversedStr = reversedArr.join('');
console.log("The reversed string is: " + reversedStr);
//##########################################
// Circle radius
let r = 5;
// Calc the Area
let area = Math.PI*r*r;
// Calc the circumference
let circumference = 2*Math.PI*r;
// Print the area
console.log('The area of circle is: ' + area);
// Print the circumference
console.log('The circumference of circle is: '+ circumference);
//#########################################################
function test(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test(50, 50))
console.log(test(20, 50))
console.log(test(20, 20))
console.log(test(20, 30))
//########################################################
function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
//###############################################
function test(x) 
{
  if (x % 5 == 0 || x % 8 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
console.log(test(35));
console.log(test(10));
console.log(test(11));
//###################################################
function maxNum(num1, num2, num3){
    var max = 0;
    if(num1 > num2){
        if(num1 > num3){
            max = num1;
        }
        else{
            max = num3;
        }
    }
    else{
        if(num2 > num3){
            max = num2;
        } else {
            max = num3;
        }
    }
    return max;
}
console.log(maxNum(5,7,9));
//################################################
function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
console.log(numSum(10));
//####################################################
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ');
  }
  for (let k = 0; k < i; k++) {
    process.stdout.write('*');
  }
  console.log();
}
//#############################################
function sum(num1,num2){
    return num1 + num2
}
console.log(sum(3,5));
//###########################################

let f= 5;
function factorial(f) { 
    if (f === 0) { 
        return 1; 
    } 
    else { 
        return f * factorial( f - 1 ); 
    } 
} 
  
console.log(factorial(f));
//@##############################################
function calculator(num1,num2){
    function sum(){
        return num1+num2
    } 
    function sub(){
        return num1-num2
    }
    function mul(){
        return num1*num2
    }
    function div(){
        return num1/num2
    }
    return {sum,sub,mul,div}
}
const calc = calculator(20,2)
console.log(calc.sum())
console.log(calc.sub())
console.log(calc.mul())
console.log(calc.div())
