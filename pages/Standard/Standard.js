//This is a static amount that changes according to the number of users.
// Rova charges 800 for the standard access
//We then get the number of users from the user input
let amount=1200;
Page({
data:{
 text:"This Plan Offers: \t \n  1. A Live Dashboard of day's Sales and Expenses \n 2.Ability to Add New Order \n 3. Access to Pending Orders \n 4. Access to the Report of the Monthly Sales and Expenses \n 5. Add and View All Products\n 6. View Inventory\n 7. Add and View Invoices\n 8. View Purchases History  ",
 },
formSubmit: function(e) {
   let people=e.detail.value.users
   var totalAmount=amount * people;
   my.call('payBill',
{ businessID: '4020103',
billReference: 'ROM Standard Plan',//account number of the on
amount: totalAmount,
currency: 'KES', // currencyCode to be used - only KES supported for now reason: 'Electricity bill', // optional field
success: function(res)
{ 
  my.alert({
    title: 'Success',
    content: JSON.stringify(res),
    buttonText: 'OK',
   
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
billReference: '123456789',//account number of the on
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
