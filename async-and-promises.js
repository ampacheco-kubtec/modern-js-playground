
const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done');
        }, 5000);
    });
    return promise;
}

setTimeout(()=>{
    console.log('Timer is done!');
    fetchData().then((v) => {
        console.log(v);
        return fetchData();
    }).then( (v) => {
        console.log(v, 'again');
    });
}, 2000);

console.log('Hello Alejandro!');
console.log('Hello Code!');
