
//Write a javascript function that prints the reverse of a number. Example: if the number is 149, then output should be 941.

let num = 258963;


myfun(num);



function myfun(num){

    let rev = 0;
    let lastDigit;
    
    while(num != 0){
        lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num/10);
    }
    
    console.log("Reverse number : "+rev);
}