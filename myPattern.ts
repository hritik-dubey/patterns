// Input:  ‘N’ = 3

// Output: 
// * 
// * *
// * * *
function printNumber(n:number):void{
    for(let i:number=1;i<=n;i++){
        let str:string = ""
        for (let j: number = 0; j < i; j++) {
            str+="*"
        }
        console.log(str)
    }
}
printNumber(3)