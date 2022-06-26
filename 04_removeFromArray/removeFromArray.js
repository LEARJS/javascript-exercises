// const removeFromArray = function(array, removeElement) {
//     return array.filter(function(ele){ 
//         array.forEach(ele => {
//             ele != removeElement;
//         });
//         return ele; 
//     });

// };

const removeFromArray = function(array, ...removeElement) {
    return array.filter(ele => !removeElement.includes(ele))

};

// const removeFromArray = function(array, removeElement) {
//     return array.filter(function(ele){ 
//         return ele != removeElement;
//     });
// };

// Do not edit below this line
module.exports = removeFromArray;
