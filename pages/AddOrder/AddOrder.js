let token =''
Page({
  formSubmit: function(e) {
    //Missing and inconsistent data to be up
    // dated
    // Product: "3939964000008024023",
    // Customer: "3939964000008024059",3939964000008071049
    // Delivery_Agency:"3939964000008024099",
    // Sales_Owner: "3939964000008068015",
    const salesowner=e.detail.value.sales
    const cust = e.detail.value.cus
    const orderdate=e.detail.value.d_order
    const agency =e.detail.value.agen
    const deldate = e.detail.value.deldate
    const prodt = e.detail.value.prod
    const quty = e.detail.value.qty
   my.request({
      url: 'https://accounts.zoho.com/oauth/v2/token?client_secret=724e2339735811fcd813a92451f97fed761e55a8ac&refresh_token=1000.1c8e92a08e10df46440cfc858321387b.3503b5fe495f37cc8dbafac5557d5834&client_id=1000.LPJI1OJFUVXHJS990UDN47O6315QBJ&grant_type=refresh_token',
      headers: {},
      method: 'POST',
      data: {},
      timeout: 30000,
      dataType: '',
      success: (result) => {
        const accessToken=result.data.access_token
        token = accessToken
        const authi='Zoho-oauthtoken'+" "+token
        my.request({
           url: 'https://creator.zoho.com/api/v2/rovadigital/ordermanagement/form/New_Order',
          headers: {
            Authorization:authi
          },
          method: 'POST',
          data: {
           data: {
        Status: "Pending",
        Products: [
            {
                Product: prodt,
                Unit_Of_Measure: "Kilogrammes",
                Quantity: quty,
                Unit_Price: "12.00",
                Total: "120.00"
            }
        ],
        Customer: cust,
        Sales_Owner: salesowner,
        Sub_Total: "770.00",
        Tax: "12",
        Order_Date: orderdate,
        Estimated_Delivery_Date: deldate,
        Actual_Delivery_Date: "",
        Net_Total: "862.40",
        Delivery_Agency:agency,
       Reason_For_Cancellation:""
    }
          },
          timeout: 30000,
          dataType: '',
          success: (result) => {
            my.showToast({
              content: 'Data Captured Successfully',
              type: 'success',
              duration: 1200,
              success: () => {
           
              },
            });
             },
          fail: (result) => {
          
           
          },
        });
      },
      fail: (result) => {
        my.showToast({
              content: result.data.description ,
              type: 'fail',
              duration: 1200,
            });
      },
    });
 
},
  formReset: function() {
    console.log('form has a reset event')
  },
 onLoad() {
  },
  generateTokens(){
    
  }
});

