const add = require('./app');

if (add(20,30) === 50) {

    console.log("test passed!");
    process.exit(0);
    
} else {

    console.log("test is failed");
    process.exit(1);
    
}
