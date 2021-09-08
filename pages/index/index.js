const banks = ['Mybank', 'CCB', 'ICBC', 'SPDB'];
Page({
data:{
text:'Handle your entire order process in one system. Manage your  Inventory and Sales efficiently. Process quotes, orders and  invoices while managing your purchase orders. This Application  also alerts the administrator on the Inventory status and sends  Invoices to customers on every successful order.',
terms:'By tapping on `Get started` you acknowledge that you have read and agreed to our terms and conditions,privacy policy '
},
onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  go(){
  my.navigateTo({
    url: '/pages/Login/Login',
  });
},
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
    
  },
  onReachBottom() {
    // 页面被拉到底部
   
   },
   handleclick(){
  my.redirectTo({
    url:'/pages/home/home'
  });

   },
   songa(){
my.redirectTo({
  url: 'https://m-pesa-miniprogram.alipay.com/docs-m-pesa/miniprogram_m-pesa/mpdev/api_storage_getstorage'
});
   },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
 
});
