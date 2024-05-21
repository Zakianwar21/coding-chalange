// WPU coding challange 2024
// 6/366
//https://github.com/Zakianwar21/coding-chalange


const DNAtoRNA = (dna) =>
    dna
    .split('')
    .map((el) => (el === 'T' ? 'U' : el))
    .join('');

console.log(DNAtoRNA('GCAT'));