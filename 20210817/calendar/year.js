const year=(year)=>{
    let ly=year - 1983;
    switch(ly % 10){
        case 1:
        case 2: return "Green";
        case 3:
        case 4: return "Red";
        case 5:
        case 6: return "Yellow";
        case 7:
        case 8: return "White";
        case 9:
        case 0: return "Black";

    }
};

module.exports=year;