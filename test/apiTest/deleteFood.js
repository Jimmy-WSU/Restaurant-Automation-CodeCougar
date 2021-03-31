const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
  'key': '21' 
});
let config = {
  method: 'post',
  url: 'http://localhost:3001/foodDelete',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

//Postman test script, can only run in Postman
pm.test("Delete food successfully", function () {
  var jsonData = pm.response.json();
  console.log(jsonData);
  pm.expect(jsonData.status).to.eql('Successful');
});
