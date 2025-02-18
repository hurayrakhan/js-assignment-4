// problem-1

function calculateVAT(amount){
    if (typeof(amount) === "number" && amount > 0){
        const vat = 7.5 / 100;
        const vatAmount = amount * vat;
    return vatAmount;
    }
    else{
        return "Invalid"
    }
}



