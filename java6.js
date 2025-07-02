// // // // // // // // // // let i   = 1;
// // // // // // // // // // while(i <= 5) {
// // // // // // // // // //     console.log("i=", i);
// // // // // // // // // //     i++;
// // // // // // // // // // // }
// // // // // // // // // // let i = 1;
// // // // // // // // // // do {
// // // // // // // // // //     console.log("i=", i);
// // // // // // // // // //     i++;
// // // // // // // // // // }while(i<=10);

// // // // // // // // // // let str= "Gaurav Verma";
// // // // // // // // // // let size=0;
// // // // // // // // // // for (let i of str){
// // // // // // // // // //     console.log("i=",i);
// // // // // // // // // //     size++;
// // // // // // // // // // }
// // // // // // // // // // // console.log("gaurav size=" ,size);

// // // // // // // // // // let in

// // // // // // // // // // let student = {
// // // // // // // // // //     name: "gaurav soni",
// // // // // // // // // //     age: 35,
// // // // // // // // // // };
// // // // // // // // // // for(let key in student){
// // // // // // // // // //     console.log(key, student [key]);

// // // // // // // // // // }
// // // // // // // // // for(let i=0; i<=100; i++){
// // // // // // // // //     if(i%2!==0){
// // // // // // // // //         console.log(i)
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // Game
// // // // // // // //     // let chno = 100;
// // // // // // // //     // let username = prompt("Guess the right no:");
// // // // // // // //     // while(chno != username){
// // // // // // // //     //     username = prompt("wrong.no. try again");
// // // // // // // //     // }   
// // // // // // // //     // console.log(":you win:");
// // // // // // // // ``
// // // // // // // // let tem=`this is template string ${1+2+50}`;
// // // // // // // // console.log(tem);

// // // // // // // let fullName = prompt("Enter the username without");
// // // // // // // let username= "@" + fullName + fullName.length;
// // // // // // // {
// // // // // // //     username = prompt("enter again");
// // // // // // //      username++;
// // // // // // // } 
// // // // // // // console.log(username);

// // // // // // let actor=["govinda","salman","akshay","hritik","tiger"];
// // // // // // for(let idx=0; idx   <actor.length;idx++){
// // // // // //     console.log(actor.[idx]);
// // // // // // }

// // // // // let m=[85,97,44,37,76,60];
// // // // // let sum=0;
// // // // // for(let val of m){
// // // // //     sum += val;
// // // // //     }
// // // // //     console.log(`total mark = ${sum}`);
// // // // // let avg = sum / m.length;
// // // // // console.log(`average mark of class = ${avg}`);

// // // // let item=[250,640,300,900,50];
// // // // let i=0;
// // // // for(let val of item) {
// // // //     console.log(`value of index ${i} = ${val}`);
// // // //     let offer = val/10;     
// // // //     item[i]=item[i] - offer;
// // // //     console.log(`after offer value = ${item[i]}`);
// // // //     i++;
// // // // }

// // // // const b=(x,y)=>{
// // // //     console.log(x+y);
// // // // };

// // // function countvowels (str) {
// // //     let count=0;
// // //     for(const chr of str){
// // //         if (chr==="a"|| chr==="e"||chr==="i"||chr==="o"||chr==="u"){
// // //         count++;
// // //      }       
// // //    }
// // //    return(count);
// // // // }

// // // let a=["chhatrpur","vijaywara","ramnagar","swizerland"];
// // let a=[1,2,3,4,5];

// // // a.forEach((v)=>{
// // //     console.log(v.toUpperCase());
// // // })
// // // let b=(v)=>{
// // //     console.log(v*v);
// // // };
// // // a.forEach(b)


// // // let b=a.map((v)=>{
// // //     return v;
// // // })

// // // console.log(b);

// // let n=prompt("enter n");

// // let arr=[];

// // for(let i=1;i<=n;i++){
// //     arr[i-1]=i;
// // }
// // console.log(arr);

// // let sum=arr.reduce((r, p)=>{
// //     return b=r*p;

// // })
// // console.log(sum);

// console.dir(document.body);
// document.body.childNodes[1].innerText="k";

let buton=document.createElement("button");
let currentMode="light";
buton.addEventListener("click",  () => {
    if(currentMode ==="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currentMode="light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currentMode);
});
buton.innerText="click ON";
buton.style.color="yellow";
buton.style.backgroundColor="purple";

document.querySelector("body").after(buton);