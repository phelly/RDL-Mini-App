//This is a static amount that changes according to the number of users.
// Rova charges 800 for the standard access
//We then get the number of users from the user input
let amount=2000;
 
Page({
data:{
text:"This Plan Offers: \t \n 1.Ability to Add and View all Employees \n 2.Manage Customers,Suppliers and Delivery Agencies \n 3.Email Campaigns \n 4. In Platform Communication \n   5. A Live Dashboard of day's Sales and Expenses \n 6.Ability to Add New Order \n 7. Access to Pending Orders \n 8. Access to the Report of the Monthly Sales and Expenses \n 9. Add and View All Products\n 10. View Inventory\n 11. Add and View Invoices\n 12. View Purchases History ",
},
formSubmit: function(e) {
   let people=e.detail.value.users
   var totalAmount=amount * people;
   my.call('payBill',
{ businessID: '4020103',
billReference: 'ROM Premium Plan',//account number of the on
amount: totalAmount,
currency: 'KES', // currencyCode to be used - only KES supported for now reason: 'Electricity bill', // optional field
success: function(res)
{ 
  my.alert({
    title: 'Success',
    content: JSON.stringify(res),
   
    buttonText: 'Close',
   
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
      
    },
    complete: () => {
      
    }
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
    content: JSON.stringify(res),
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
