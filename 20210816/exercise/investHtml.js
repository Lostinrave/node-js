const invest=require('./invest');


const index=()=>{
    let s='<html>';
    s+='<body>';
    s+='<form method="POST" action="investment">';
    s+='<input type="text" name="x"> </br>';
    s+='<input type="text" name="y"> </br>';
    s+='<input type="text" name="z"> </br>';
    s+='<button type"submit">Calculate investment</button>';
    s+='</form>';
    s+='</body>';
    s+='</html>';
    return s;
}

const result=(x, y, z)=>{
    let s='<html>';
    s+='<body>';
    s+=`Result: ${invest(x,y,z).toFixed(2)}`;
    s+='</body>';
    s+='</html>';
    return s;
}

module.exports={index,result};