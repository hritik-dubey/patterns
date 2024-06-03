// // Input:  ‘N’ = 3

// // Output:
// // *
// // * *
// // * * *
// function printNumber(n:number):void{
//     for(let i:number=1;i<=n;i++){
//         let str:string = ""
//         for (let j: number = 0; j < i; j++) {
//             str+="*"
//         }
//         console.log(str)
//     }
// }
// printNumber(3)



// Input: ‘N’ = 3

// Output:
// 1
// 1 2
// 1 2 3


// function printPattern(n:number):void{
//     for(let i :number=1;i<=n;i++){
//         let str =  ""
//         for(let j:number=1;j<=i;j++){
//             str+=j;
//         }
//         console.log(str)
//     }
// }
// printPattern(3)

// ================================================================================================


// Input: ‘N’ = 3

// Output:
// 1
// 2 2
// 3 3 3


function printPattern(n:number):void{
    for(let i :number=1;i<=n;i++){
        let str =  ""
        for(let j:number=1;j<=i;j++){
            str+=i;
        }
        console.log(str)
    }
}
printPattern(3)