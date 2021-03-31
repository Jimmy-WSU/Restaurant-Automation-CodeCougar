const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
  'tableID': '3' 
});
let config = {
  method: 'post',
  url: 'http://localhost:3001/tableClean',
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
pm.test("Clean the table successfull", function () {
  var jsonData = pm.response.json();
  console.log(jsonData);
  pm.expect(jsonData.status).to.eql('Successful');
});