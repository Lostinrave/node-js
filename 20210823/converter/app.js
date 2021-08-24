const converter=require('./converter');

converter('EUR','USD',(data)=>{
    data.forEach((d) => {
        console.log("Day: "+d.date+"\t Rates:"+d.value);
    });
});
