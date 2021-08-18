const olympic=(year)=>{
    let olympicNr = 0;
    // if(year.value==null){
    //     return "Please enter correct year";
    // }
    if(year%4==0 && year>=1896){
        olympicNr=((year-1896)/4)+1;
        return `During ${year} nr:${olympicNr} olympic games took place`;
    }
    else {
        return `During ${year} olympic games were not taking place`;
    }

};

module.exports=olympic;