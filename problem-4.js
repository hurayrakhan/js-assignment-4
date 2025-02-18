

function validProposal(man1, man2){
    if(typeof(man1) === "object" && typeof(man2) === "object"){
        const ageDifference = man1.age - man2.age; 

        if(man1.gender !== man2.gender && Math.abs(ageDifference) < 8){
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



const rahul = { name: "toya", gender: "female", age: 20 }; 
const joya = { name: "kader", gender: "male", age: 25 };


const isValid = validProposal(joya, rahul);
console.log(isValid);