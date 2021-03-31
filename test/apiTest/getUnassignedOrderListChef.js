const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
   
});
let config = {
  method: 'post',
  url: 'http://localhost:3001/getUnassignedOrderList',
  headers: { },
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
pm.test("Get Unassigned OrderList successfully", function () {
  var jsonData = pm.response.json();
  console.log(jsonData);
  pm.expect(jsonData.status).to.eql('Successful');
});

pm.test("Get Order Details", function () {
  pm.expect(pm.response.text()).to.include("orderDetails");
});
