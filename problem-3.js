
function willSuccess(marks){

    const pass = [];
    const fail = [];

    if(Array.isArray(marks)){
        for(const num of marks){
            if(num >= 50){
                pass.push(num);
                
            }
            else{
                fail.push(num);
            }
        }

        if(pass.length > fail.length){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return "Invalid";
    }    
}

const numbers = [55, 75, 41, 33, 0, 87, 91, 56];


const accepted = willSuccess(numbers);
console.log(accepted);