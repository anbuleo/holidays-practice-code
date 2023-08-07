///here we see addition operation get the number from prompt in while loop

// let sum=0;
// let number=parseInt(prompt(`ENTER NUMBER YOU WANT TO ADD: `));
// while(number>=0){
//     sum+=number;
//     number=parseInt(prompt(`ENTER NUMBER YOU WANT TO ADD TO QUIT CLICK ENTER AGAIN: `))
// }
// console.log(`THE SUM IS: ${sum} `)
// // lets see to print 1to 20 using  do while loop

// //inizaling variable
// let i=1,n=20;
// //it do runs a code until while condition is satisfy
// do{
//     console.log(i);
//     i++;
// }while(i<=n);

//using do while loop we do sum operation by get the input from prompt and sum of that values and sendit to console
//while the negative integer value means it exit the loop

// let sum=0,number=0;
// do{
//     sum+=number;
//     number=parseInt(prompt(`Enter the positive number to add and to quit click "enter" twice: `));
// }while(number>=0);
// console.log(`The sum is: ${sum}`)


//if statement using diferrnt methods by my ideas

////if statement to identify the input by promt and change the negative and positive number

// const number=prompt(`Enter the number to check the code: `);
// if(number>0){
//     console.log(`you entered number is positive number ${number}`);
    
// }else if(number==0){
//     console.log(`you entered a "zero" ${number}`);
    
    
// }else{
   
//     let absnumber=Math.abs(number);
//     console.log(`I changed ${number} to ${absnumber}`)
//  }



///// in an array to take avalue and make positive and negetive value to seperate 

// let arr=[1,2,3,4,5,6,9,-4,6,-8,-1,-4];
// let posarr=[];
// let negarr=[];
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]>0){
//         posarr.push(arr[i]);
//     }else if(arr[i]<0){
//         negarr.push(arr[i]);
    
//     }
// }
// console.log(posarr.sort());
// console.log(negarr.sort());



// // //adding that positive number arr
// let i = 0, n = posarr.length;
// let sum =0;
// while (i <n) {
//     sum+=posarr[i]
//     i += 1;

// }
// console.log(sum);

// //we covert the neg value to positive and sum that 


// let sum1=0,ii=0;
// do{
//     let newneg=parseInt(negarr[ii])
//     sum1 += newneg
//     ii+=1
// }while(ii<negarr.length);
// console.log(Math.abs(sum1))


//function

// function welcome(name1){
//     console.log(`welcome ${name} to our console :)`)
//     return name1;
// }
// let name=prompt(`Enter your name: `)
// welcome(name);


//function using recurssion method to find factorials of input from prompt

function factorial(a){
    if(a===0){
        return 1

    }else{
        return a*factorial(a-1)
    }
}
const num=parseInt(prompt(`Enter the number to factorial: `))
if(num>0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`)
}
