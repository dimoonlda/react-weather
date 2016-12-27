function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if ((a) && (b) && (typeof a === 'number') && (typeof b === 'number')) {
            setTimeout(function () {
                resolve(a + b);
            }, 4000);
        } else {
            reject("Wrong argument.")
        }
    });
}

function testPromise(promise) {
    promise.then(res => console.log('Success: ' + res))
            .catch(err => console.log('Error: ' + err));
}

testPromise(addPromise(3, 100));
testPromise(addPromise(100));
testPromise(addPromise('string', 100));