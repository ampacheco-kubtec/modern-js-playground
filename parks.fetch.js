// Hay un solo parque que no tiene addresses array y por tanto no tiene stateCode
const data = require("./data.json");
const parks = data.data;

const selectedStates = ["KY", "FL"];
let filtered = [];

function filter() {
  filtered = parks.filter((e) =>
    e.addresses.some((a) => 
        selectedStates.includes(a.stateCode))
  );
}

(() => {
  console.log(`parks total: ${parks.length}`);
  filter();
  console.log(`filtered total: ${filtered.length}`);
})();
