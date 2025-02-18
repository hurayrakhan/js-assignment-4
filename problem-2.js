function validContact(contact){
    if(typeof(contact) === "string") {
        if(contact.startsWith("01") && contact.length === 11 && !contact.includes(" ")){
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
const validNumber = validContact("01987654321");
console.log(validNumber);