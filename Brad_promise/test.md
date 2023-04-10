```javascript
function print(resolve, reject) {
    console.log("--------callback execute hoisi------------");
    console.log(resolve, reject);
    setTimeout(() => {
        console.log("Call stack e ashsi");
        const user = [1,2,3];
        resolve(user);
    }, 2000);
}
/*
class Promise {
    constructor(callback) {
        this.resolve = function(){};
        this.reject = function(){};
        callback(this.resolve, this.reject); // it get's executed upon constructor call
    }
     
    then = (cb1) => {
        this.resolve = cb1;

        return this;
    }

    catch = (cb2) => {
        this.reject = cb2;

        return this;
    }
}
*/
console.log("Start");

const prom1 = new Promise(print);
console.log(prom1);

prom1
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});

console.log("end");
```
/*
1. promise j function er moddhe thakbe tar age async word ta use korte hobe.
2. jokhon amra kono function er vitor 

objective questions. 10 

*/
