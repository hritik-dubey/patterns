// Input: ‘N’ = 3

// Output: 
// * * *
// * * *
// * * *


function printPattern(n){
    for(let i=0;i<n;i++){
        let str = ""
        for(let j = 0;j<n;j++){
            str+="*"
        }
        console.log(str)
    }
}

printPattern(3)