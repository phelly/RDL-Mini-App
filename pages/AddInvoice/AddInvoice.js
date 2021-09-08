let token =''
Page({
  formSubmit: function(e) {

    const supplier=e.detail.value.supp
    const indate = e.detail.value.idat
    const inum=e.detail.value.inum
    const product =e.detail.value.prod
    const cashier = e.detail.value.cashie
    const quty = e.detail.value.quat
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
           url: 'https://creator.zoho.com/api/v2/rovadigital/ordermanagement/form/Add_Invoice',
          headers: {
            Authorization:authi
          },
          method: 'POST',
          data: {
             data: {
     Products : [
        {
          Product:"3939964000008024023",
          Unit_Of_Measure:"Kilogrammes",
          Quantity:"30",
          Cost_Price:"40.00",
          Selling_Price:"12.00",
          Total:"1200.00"
         }
         ],
          Submitted_By: "",
          Sub_Total: "1200.00",
          Invoice_Number:"8",
          Tax:"10",
          Invoice_Date:"07-Sep-2021",
          Net_Total:"1200.00",
          Supplier:"3939964000008024083"
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

