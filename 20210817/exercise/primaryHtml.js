const primary=require('./primary');


const index=()=>{
    let s='<html>';
    s+='<body>';
    s+='<form method="POST" action="calculate">';
    s+='<input type="number" name="num">';
    s+='<button type"submit">Calculate</button>';
    s+='</form>';
    s+='</body>';
    s+='</html>';
    return s;
}

const result=(num)=>{
    let s='<html>';
    s+='<body>';
    s+=`Result: ${primary(num)}`;
    s+='</body>';
    s+='</html>';
    return s;
}

module.exports={index,result};