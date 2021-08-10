const isKeliamieji = (metai) => {
    if(metai% 400==0 || metai % 100!=0 && metai%4==0){
            return true;
        }else{
            return false;
        }
}
const keliamieji = (metai) => {
    if(isKeliamieji(metai)){
            console.log("Metai keliamieji");
        }else{
            console.log("Metai paprastieji");
        }
}

module.exports={keliamieji, isKeliamieji};