function daugyba(){
    for(let x=1; x<=10; x++){
        console.log(`${x}.\t ${(x*2.54)}\t| ${x}.\t ${((x/2.54).toFixed(2))}`);
    }
}
console.log(`col.\t cm.\t| col.\t cm.`);
daugyba();