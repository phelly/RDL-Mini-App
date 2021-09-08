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
      url: 'https://accounts.zoho.com/oauth/v2/token?client_secret=668c49de126870f6a9487c69ff2670f86b729d5fdc&refresh_token=1000.daf558ff9f42e6b2257d76d3cb5182b1.f2d2f3888ebad721a27cf2f526664490&client_id=1000.F47XLXJEH0SOUSB0A0F2O8XQV1L6OE&grant_type=refresh_token',
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
           url: 'https://creator.zoho.com/api/v2/rovadigital/rdl-order-management-prospects/form/Invoice',
          headers: {
            Authorization:authi
          },
          method: 'POST',
          data: {
            data:{
             Supplier:supplier,
             InvoiceDate:indate,
             InvoiceNumber:inum,
             Product:product,
             Quantity:quty,
             Cashier: cashier
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

