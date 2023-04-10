```javascript
function print(resolve, reject) {
    console.log("--------callback executed------------");
    console.log(resolve, reject);
    setTimeout(() => {
        console.log("Call stack e ashsi");
        const user = [1,2,3];
        resolve(user);
    }, 2000);
}

// Under the hood in promise
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
* We have to use async before the function that has promise inside of it
