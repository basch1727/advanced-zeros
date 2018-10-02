module.exports = function getZerosCount(number, base) {
    let overallResult = Infinity;

    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {               
            let j = 0;
            while (base % i === 0) {
                base =base/ i;
                j=j+1;                 
            }
            let result = 0;
            let quantity = number;
            while (quantity / i > 0) {
                result =result + Math.floor(quantity / i);
                quantity = Math.floor(quantity / i);  
            }
            overallResult = Math.min(overallResult, Math.floor(result / j));   
        }
    }

    return overallResult;


};