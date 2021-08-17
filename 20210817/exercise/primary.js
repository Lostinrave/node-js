const primary = (num) => {
    for(let i = 2; i < num; i++){
      if(num % i === 0 || num ===1) {
          return num+" is not a primary";
      }
    }
    return num+" is a primary";
}
module.exports=primary;