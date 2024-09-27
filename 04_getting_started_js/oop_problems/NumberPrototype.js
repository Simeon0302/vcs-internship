// eslint-disable-next-line no-extend-native
Number.prototype.times = function(action) {
    let num = this;
    while (num > 0) {
        action();
        num--;
    }
};

(5).times(function() {
    console.log('OMG!');
});
