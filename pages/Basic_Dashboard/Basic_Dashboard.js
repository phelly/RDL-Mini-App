 
Page({
  data: {
  plan :'Basic Plan',
  sales:'$4500',
  expenses :'$560',
list3: [
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCiiFOm436gPKtUSUm0Nalekk3Gl5TNUdkQ&usqp=CAU',
        text: 'Product',
        desc: 'Add Product',
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkCO7Tk352a4s9JQq9SmNuDsLpD0QNqKTvw&usqp=CAU',
        text: 'Orders',
        desc: 'Add Order',
      },
      {
        icon: 'data:image/png;base64,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',
        text: 'Invoices',
        desc: 'Add Invoice',
      },
    ],
   
  },
  onItemClick(ev) {
    var ind=ev.detail.index
    if(ind =='0'){
     my.navigateTo({
       url: '/pages/AddProduct/AddProduct'
     });
    }else if(ind =='1'){
      my.navigateTo({
        url: '/pages/AddOrder/AddOrder'
      });
  }else if(ind =='2'){
    my.navigateTo({
      url: '/pages/AddInvoice/AddInvoice'
    });

  }
    
  },
});