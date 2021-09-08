Page({
  formSubmit: function(e) {
   const jina= e.detail.value.fname
   const wav=e.detail.value.email
   const simu=e.detail.value.phone
   if((jina ==="")||(/[^a-zA-Z] [^a-zA-Z]/.test(jina))){
      my.showToast({
    content: 'Name is empty / Incorrect Name Format',
    type: 'fail',
    duration: 900,
  });
     
  }else if ((simu=="")||(/[^0-9]/.test(simu))||(simu.length<=9)|| (simu.length>13)) {
     my.showToast({
    content: 'Phone is empty /Invalid Phone Number',
    type: 'fail',
    duration: 900,
  });
   }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(wav)){
   my.showToast({
    content: 'Email is empty / Incorrect email Format',
    type: 'fail',
    duration: 900,
  });
}else{
  console.log(jina)
  console.log(wav)
  console.log(simu)
   }
   
my.request({
  // url:'https://creator.zoho.com/api/v2/inchenomorai001/rova-order-management/report/add_order_Report',
  url:'https://creator.zoho.com/api/v2/inchenomorai001/rova-order-management/form/add_order',
  headers: {
    Authorization:'Zoho-oauthtoken 1000.b4554da89943c57255550738ae8aeb5f.05b39e2284d2f84aa725cc645d2691d5'
  },
  method: 'POST',
  data: {
    data:{
    Name:jina,
    Email:wav,
    Phone:simu
    }
  },
  timeout: 30000,
  dataType: 'json',
  success: function(res) {
 my.showToast({
    content: 'Sending Captured Data',
    type: 'success',
    duration: 900,
   
  });
  },
  fail: function(res){
  my.showToast({
    content: "Name: "+jina+" \n"+"Email: "+wav+" \n"+"Phone: "+simu,
    type: 'fail',
    duration: 900,
   
  });
   console.log(res)
   my.showToast(res);
  },
  complete: function(res){
    my.hideLoading();
    my.showToast({
    content: 'completed',
    type: 'success',
    duration: 900,
   
  });
  }
});
  },
  formReset: function() {
    console.log('form has a reset event')
  },
 onLoad() {
  },
  login(){
    my.navigateTo({
      url: '/pages/Login/Login'
    });
  }
});
