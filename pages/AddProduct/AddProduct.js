let token =''
Page({
  formSubmit: function(e) {
    // var BM="3939964000008024007"
    // var ES="3939964000008024015"
    // var PM="3939964000008024011"
    const grp=e.detail.value.group
    const name = e.detail.value.pname
    const code = e.detail.value.pcode
    const level=e.detail.value.plevel
    const unit =e.detail.value.punit
    const p_price= e.detail.value.price
    const amount= e.detail.value.pamount
    
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
           url: 'https://creator.zoho.com/api/v2/rovadigital/ordermanagement/form/Add_Product',
          headers: {
            Authorization:authi
          },
          method: 'POST',
          data: {
            data:{
        Product_Group:grp,
        Status:"Active",
        Product_Code:	code,
        Unit_Of_Measure:unit,
        Product_Name:name,
        In_Stock:amount,
        Selling_Price:p_price,
        Reorder_Level:level
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

