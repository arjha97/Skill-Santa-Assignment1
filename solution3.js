function cToF(celcius){
    let clc = celcius;
    let fhn = clc * 9 / 5 + 32;
    let message = clc+'\xB0C is ' + fhn + ' \xB0F.';
    document.write(message + '\t');
}

function fToC(fahrenheit) 
{
  let fhn = fahrenheit;
  let clc = (fhn - 32) * 5 / 9;
  let message = fhn+'\xB0F is ' + clc + '\xB0C.';
  document.write(message);
} 

cToF(Number(prompt("Enter the temp in celcius : ")));
fToC(Number(prompt("Enter the temp in fahrenheit : ")));