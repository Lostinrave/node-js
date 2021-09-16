const express=require('express');
require('./db/mongoose');
const feedbackRoutes=require('./routes/feedbackRoutes');
const userRoutes=require('./routes/userRoutes');


const app=express();

app.use(express.json())
app.use(feedbackRoutes);
app.use(userRoutes);

app.listen(3000);

// console.log(jwt.sign({id:10},'kazkoks6589'));
// bcrypt.hash("Labas",10).then((code)=>{
//     console.log(code);
// });

// bcrypt.compare("Labas","$2b$10$q2711FPFJYdAG8WlWbi8ee2wfy7kTvL5fVdp3TkpZ/Zck250hbmGe").then((result)=>{
//     console.log(result);
// });