const daliklis=require('./daliklis');


const index=()=>{
    let s='<html>';
    s+='<body>';
    s+='<form method="POST" action="calculate">';
    s+='<input type="text" name="x"> </br>';
    s+='<input type="text" name="y"> </br>';
    s+='<button type"submit">Calculate</button>';
    s+='</form>';
    s+='</body>';
    s+='</html>';
    return s;
}

const result=(x, y)=>{
    let s='<html>';
    s+='<body>';
    s+=`Result: ${daliklis(x,y)}`;
    s+='</body>';
    s+='</html>';
    return s;
}

module.exports={index,result};