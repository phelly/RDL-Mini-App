//This is a static amount that changes according to the number of users.
// Rova charges 800 for the basic access
//We then get the number of users from the user input
let amount=10;
Page({
data:{
text:"This Plan Offers: \t \n  1. A Live Dashboard of day's Sales and Expenses \n 2.Ability to Add New Order \n 3. Access to Pending Orders \n 4. Access to the Report of the Monthly Sales and Expenses",
},
formSubmit: function(e) {
   let people=e.detail.value.users
   let Email = e.detail.value.email
   var plan ='ROM Basic Plan'
   var totalAmount=amount * people;
   my.call('payBill',
{ businessID: '871452',
billReference: plan,//account number // plan name for this case
amount: totalAmount,
currency: 'KES', // currencyCode to be used - only KES supported for now reason: 'Electricity bill', // optional field
success: function(res)
{ 
  my.alert({
    title: 'Success',
    content: 'Payment Completed',
    buttonText: 'OK',
   
  });
  my.navigateTo({
    url: '/pages/Basic_Dashboard/Basic_Dashboard'
  });
  my.request({
    url: '',
    headers: {},
    method: '',
    data: {},
    timeout: 30000,
    dataType: '',
    success: (result) => {
      
    },
    fail: () => {
      
    }
  });
},
fail: function(res)
{  my.alert({
    title: 'Error',
    // content: JSON.stringify(res),
  content:'Failed to Complete Payment',
    buttonText: 'OK',
   
  });
},
});
},
  formReset: function() {
    console.log('form has a reset event')
  },
onLoad(query) {
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
 checkout(){
var amot=amount * users;
console.log(amot)
my.call('payBill',
{ businessID: '4020103',
billReference: 'Basic Plan',//account number of the on
amount: amot,
currency: 'KES', // currencyCode to be used - only KES supported for now reason: 'Electricity bill', // optional field
success: function(res)
{ 
  my.alert({
    title: 'Success',
    content: JSON.stringify(res),
    buttonText: 'Close',
   
  });
},
fail: function(res)
{  my.alert({
    title: 'Error',
    // content: JSON.stringify(res),
    content:'Failed to Complete Payment',
    buttonText: 'Close',
   
  });
},
});
},onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
 
});
