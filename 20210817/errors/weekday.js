const weekday = (day)=>{ // paduodame funkcijai viena kintamaji kuriant moduli
    let wday=day+4;
        debugger
        wday=wday%7;
        debugger
    switch(wday){
        case 1:
        return "Monday";
        case 2:
        return "Tuesday";
        case 3:
        return "Wednesday";
        case 4:
        return "Thursday";
        case 5:
        return "Friday";
        case 6:
        return "Saturday";
        case 0:
        return "Sunday";
}
}

module.exports=weekday; // nurodome jog modulis yra kintamasis kuris yra funkcija