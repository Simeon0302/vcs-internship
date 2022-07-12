function times(action){
    let num = this
    while (num > 0) {
        action();
        num--;
    }
}

Number.prototype.times = times;


(5).times(function () {
    console.log("OMG!");
})