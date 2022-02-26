if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../mini-antui/es/grid/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../mini-antui/es/card/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Register/Register?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Login/Login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Products/Products?hash=7286bb84c108df20d864e521932cd5758bb5c52a');
require('../../pages/Plans/Plans?hash=c2404ff2204cd62e00bdec6dba4ebd5263d1d5fb');
require('../../pages/Basic/Basic?hash=c2404ff2204cd62e00bdec6dba4ebd5263d1d5fb');
require('../../pages/Standard/Standard?hash=c2404ff2204cd62e00bdec6dba4ebd5263d1d5fb');
require('../../pages/Premium/Premium?hash=c2404ff2204cd62e00bdec6dba4ebd5263d1d5fb');
require('../../pages/AddProduct/AddProduct?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/AddOrder/AddOrder?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/AddInvoice/AddInvoice?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Basic_Dashboard/Basic_Dashboard?hash=2f3ba90923478500900476e46742f954c9add028');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}