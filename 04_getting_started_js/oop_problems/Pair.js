class Pair{
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    equals(pair){
        return this.left === pair.left && this.right === pair.right;
    }

    toString(){
        return `(${this.left}, ${this.right})`
    }

    toList(){
        return [this.left, this.right]
    }

    combine(func){
        return func(this.left, this.right)
    }
}


//Test
var p = new Pair(4, 6);

p.combine(function (left, right) {
    return left + right;
}); // 10