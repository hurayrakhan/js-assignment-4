function calculateSleepTime(times){
    let sumOfTime = 0;
    const time = [];

// use for loop to checking type of the elements of the array

    for(const number of times){
        if(typeof(number) === "number"){
            time.push(number);
            
        }
        else{
            return "Invalid";
        }
    }

    // calculate sum of all elements of the array
    
    for(const number of time){
        sumOfTime = sumOfTime + number;
    }

    const hours = Math.floor(sumOfTime / 3600);
    const minutes = Math.floor((sumOfTime % 3600) / 60);
    const seconds = sumOfTime % 60
    
    return {hour:hours, minute:minutes, second:seconds};
    
}


const times = [1000, 2000, 725];

const sleepTime = calculateSleepTime(times);
console.log(sleepTime);


