  //    MERN Tech Round


    //    Write a program in JS to check whether a number is Prime or not ?

    let primeNum = "Prime Number"
    let NotprimeNum = "not a Prime Number"
    function checkPrimeNum(num)
    {
    if (num <= 1)
    {
    return NotprimeNum;
    }
    if (num <= 3){
    return primeNum;
    }
    if (num%2 == 0 || num%3 == 0){
    return NotprimeNum;
    }
    for (var i=5; i*i<=num; i=i+6)
    {
    if (num%i == 0 || num%(i+2) == 0)
    return NotprimeNum;
    }
    return primeNum;
    }
    console.log(checkPrimeNum(6));




//   Write a Program to display the Pattern ?


    for (i = 0; i < 6; i++) {
    for (j = 0; j < 6 - i; j++) {
    if (i == 0 || j == 0 || j == 6 - i - 1) document.write(" * ");
    else document.write("&nbsp; &nbsp;");
    // &nbsp using for space
    }
    document.write("<br> "); // using <br> for new line
    }
    
    
// Read the local directory and list all file names it using Js.
    
const fs = require('fs');
    const path = require('path');
    const filepath = path.join(__dirname);
    fs.readdir(filepath, (err, files) => {
    if (err) {
    console.log( err);
    return;
    }
    console.log('files in directory:', files);
    });

    // Schema loop through each Student 

    const mongoose = require('mongoose');
    const checkTime = mongoose.model('userSchema');
    const Student = mongoose.model('Student');

    checkTime.find().populate('student').exec((err, time) => {
       if (err) {
        console.error(err);
       return;
     }
  
  time.forEach((data) => {
    console.log(`student ${data.time}`)
  });
});
        

        // Design of the Form page

        // Frontend code of the Form Project
        // https://github.com/karan-pandey15/formreactpage


        // Backend code of the Form Project
        // https://github.com/karan-pandey15/formproject