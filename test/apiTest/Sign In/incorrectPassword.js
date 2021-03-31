const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
  'username': 'JamesBusboy',
  'password': '123' 
});
let config = {
  method: 'post',
  url: 'http://localhost:3001/signin',
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
pm.test("Status incorrect password", function () {
  var jsonData = pm.response.json();
  console.log(jsonData);
  pm.expect(jsonData.status).to.eql('Incorrect password');
});

