String.prototype.capitalize = function() {
    return this.toUpperCase();
}

String.prototype.dasharize = function() {
    return this.replace(/[_]/g, "-");
}

String.prototype.times = function(amount){
    let resultString = "";

    while(amount > 0){
        resultString += this + " "
        amount--;
    }

    return resultString.trimEnd();
}

String.prototype.blank = function() {
    return this.trim().length === 0
}

console.log("javascript".capitalize())
console.log("border_bottom_width".dasharize())
console.log("bobi".times(5))
console.log("  ".blank()) // true
console.log("".blank()) // true
console.log(" a".blank()) // false