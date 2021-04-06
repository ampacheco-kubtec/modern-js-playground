const fetch = require('node-fetch');

// Crear Firebase App / Database
const firebaseUrl = '[your-firebase-database]';
let hobbies=[];
let keys=[];

const saveData = () => {
    hobbies.forEach( h => {
        fetch( firebaseUrl, {
            method: "POST",
            body: JSON.stringify(h),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res=>{
            if (!res.ok) {
                throw new Error('Failed!');
            }
        }).catch( err=>{
            console.log(err);
        });
    });    
};

const readData = () => {
    fetch(firebaseUrl)
        .then( res=> {
            if (!res.ok) {
                throw Error('Failed');
            }
            return res.json();
        }).then(data => {

            console.log('Data as it comes ...');
            console.log(data);
            
            // Data Transformations
            console.log('Data Transformations');
            console.log('Objects and Keys');

            hobbies = Object.values(data);
            keys = Object.keys(data);

            console.log('Data:');
            console.log(hobbies);
            console.log('Keys');
            console.log(keys);

            console.log('\nMore Complex Transformation\n');
            for (const key in data) {
                console.log(key, data[key]);
            }
        })
        .catch(err => console.log(err));
};

(() => {
    hobbies = [
        ...hobbies,
        {
            activity: "reading",
            rank: "*****"
        },
        {
            activity: "fishing",
            rank: "**"
        },
        {
            activity: "hiking",
            rank: "*****"
        },
        {
            activity: "biking",
            rank: "*****"
        },
    ];
    // Print Data
    console.log(hobbies);
    // saveData(); // Use First Time to Store Data in Firebase Real Time Database

    readData();
    console.log('Done');

})();