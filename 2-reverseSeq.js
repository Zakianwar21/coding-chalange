// WPU coding challange 2024
// 2/366
//https://github.com/Zakianwar21/coding-chalange

// const reverseSeq = (n) => {
//     const result = [];

//     for (let i = n; i >= 1; i--){
//         result.push(i);
//     }
    
    
//     return result;
// }

// console.log(reverseSeq(5));


reverseSeq = (n) => {

    return Array(n)

    .fill()

    .map((el, i) => i + 1)

    .reverse();
};

console.log(reverseSeq(5));
