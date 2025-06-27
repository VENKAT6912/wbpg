// console.log("Hi!");

// function timeout() {
//     console.log("Click the button!");
// }

// setTimeout(timeout, 15000);

// console.log("Welcome to loupe.");

class rect{
    constructor(wid,hgh,clr){
        this.wid=wid;
        this.hgh=hgh;
        this.clr=clr;
    }
    area(){
        return this.wid*this.hgh;
    }
    color(){
        console.log(`this color is ${this.clr}`)
    }
}
const rect1=new rect(2,4,"red")
const area=rect1.area()
console.log(area)
rect1.color()