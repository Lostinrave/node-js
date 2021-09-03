const fs=require('fs');

const getFeedback=()=>{
   const data=fs.readFileSync('./data/feedback.json').toString();
   const feedback=JSON.parse(data);
   return feedback;
};

const addFeedback=(name, text)=>{
    let feedback=getFeedback();
    if (feedback.length>5){
        feedback.splice(0,1);
    }
    feedback=feedback.reverse();
    feedback.push({
        name:name,
        text:text
    });
    feedback=feedback.reverse();
    fs.writeFileSync('./data/feedback.json', JSON.stringify(feedback));
};

module.exports={getFeedback, addFeedback};