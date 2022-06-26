
const repeatString = function(textMessage, num) {  
    
    newString = "";
    if (num < 0){
        return 'ERROR'

    } else {
        for (let i = 1; i <= num; i++) {
        
            newString += textMessage;
            
        }
        return newString;
    }

};

// Do not edit below this line
module.exports = repeatString;
