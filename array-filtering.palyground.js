
// Al menos uno de los e;lementos de un arreglo esta dentro
// de otro. 
const selected = ['FL', 'AK', 'WA'];

const parks = [
    {
         "name": "AAAA",
         "states": ['AZ', 'WI', 'NO']
    },
    {
         "name": "BBBB",
         "states": ['CQ', 'FL']
    },
    {
         "name": "CCCC",
         "states": ['CQ', 'AK']
    },
    {
         "name": "DDDD",
         "states": ['CQ', 'WA']
    }
];

const filterFn = (e) => {
    let result = false;
    e.states.forEach( (s) => {
        if (selected.includes(s)) {
            result=true;
            return;
        };
        // result=false;
    });
    return result;
};

(() => {
    const filtered = parks.filter(filterFn)
    filtered.forEach(e=>console.log(e));
})();