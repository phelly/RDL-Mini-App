let token =''
Page({
  formSubmit: function(e) {
   const wav=e.detail.value.email
   const simu=e.detail.value.phone
  if ((simu=="")||(/[^0-9]/.test(simu))||(simu.length<=9)|| (simu.length>13)) {
     my.showToast({
    content: 'Use Correct Format for Phone Number',
    type: 'fail',
    duration: 900,
  });
   }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(wav)){
  my.showToast({
    content: 'Use Correct Format for Email',
    type: 'fail',
    duration: 900,
  });
   }else if(wav==="bomare@rova.co.ke" && simu==="0742356449"){
     my.navigateTo({
       url: '/pages/Basic_Dashboard/Basic_Dashboard'
     });
   }
   else {
     my.navigateTo({
       url: '/pages/Products/Products'
     });
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
           url: 'https://creator.zoho.com/api/v2/rovadigital/rdl-order-management-prospects/form/Prospects',
          headers: {
            Authorization:authi
          },
          method: 'POST',
          data: {
            data:{
              Phone:simu,
              Email:wav
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
                my.navigateTo({
              url: '/pages/Products/Products'
            });
              },
            });
             },
          fail: (result) => {
           my.navigateTo({
             url: '/pages/Products/Products'
           });
           
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
} 
},
  formReset: function() {
    console.log('form has a reset event')
  },
 onLoad() {
  },
  generateTokens(){
    
  }
});
