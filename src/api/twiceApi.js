let api = {
  // text: {
  //   url: 'TestController/findName',
  //   method: 'get'
  // },
  // 客户管理
  // 查询客户订单
  orderFindOrders: {
    url: 'order/findOrders',
    method: 'post'
  },
  // 修改订单状态
  orderUpdateOrderStatus: {
    url: 'order/updateOrderStatus',
    method: 'post'
  },
  // 修改订单信息
  orderUpdateOrder: {
    url: 'order/updateOrder',
    method: 'post'
  },
  // 手动结单
  orderManualCloseOrder: {
    url: 'order/manualCloseOrder',
    method: 'post'
  },
  // 取消订单
  orderCancelOrder: {
    url: 'order/cancelOrder',
    method: 'post'
  },
  // 账户查询
  accountControllerMoreConditionFind: {
    url: 'accountController/moreConditionFind',
    method: 'post'
  },
  // 账户流水查询
  accountControllerAccountWaterConditionFind: {
    url: 'accountController/accountWaterConditionFind',
    method: 'post'
  },
  // 线下充值
  accountControllerRechargeAccoutDownLine: {
    url: 'accountController/rechargeAccoutDownLine',
    method: 'post'
  },
  // 车辆查询
  carFindCarPage: {
    url: 'car/findCarPage',
    method: 'post'
  },
  // 新增车辆
  carInsertCar: {
    url: 'car/insertCar',
    method: 'post'
  },
  // 修改车辆
  carUpdateCar: {
    url: 'car/updateCar',
    method: 'post'
  },
  // 根据车辆id查询车辆信息
  carFindCarById: {
    url: 'car/findCarById',
    method: 'get'
  },
  // 查询子订单
  orderFindChildOrders: {
    url: 'order/findChildOrders',
    method: 'post'
  },
  // 子订单结单
  orderUpdateAndPayChildOrder: {
    url: 'order/updateAndPayChildOrder',
    method: 'post'
  },
  // 查看所有模板 
  userTemplateControllerFindAllTemplates: {
    url: 'userTemplateController/findAllTemplates',
    method: 'post'
  },
  // 查看个人模板权限
  userTemplateControllerFindTemplatesByUserId: {
    url: 'userTemplateController/findTemplatesByUserId',
    method: 'post'
  },
  // 修改模板权限
  userTemplateControllerUpdateUserTemplate: {
    url: 'userTemplateController/updateUserTemplate',
    method: 'post'
  },
  // 查询所有用户接口
  customerFindAllCustomers: {
    url: 'customer/findAllCustomers',
    method: 'post'
  },
  // 查询商品
  productFindAllProducts: {
    url: 'product/findAllProducts',
    method: 'post'
  },
  // 账户导出
  accountControllerExportAccountExcel: {
    url: 'accountController/exportAccountExcel',
    method: 'get'
  },
  // 账户流水导出
  accountControllerExportAccountWaterExcel: {
    url: 'accountController/exportAccountWaterExcel',
    method: 'get'
  },
  // 车辆管理表导出
  carExportCarExcel: {
    url: 'car/exportCarExcel',
    method: 'get'
  },
  // 订单表导出
  orderExportOrderExcel: {
    url: 'order/exportOrderExcel',
    method: 'get'
  },
  // 子订单表导出
  orderExportChildOrderExcel: {
    url: 'order/exportChildOrderExcel',
    method: 'get'
  },
  // 根据客户查询商品
  customerFindCustomerPriceByCustomerId: {
    url: 'customer/findCustomerPriceByCustomerId',
    method: 'post'
  },
  // 根据客户查询收货地址
  customerFindCustomerById: {
    url: 'customer/findCustomerById',
    method: 'post'
  },
  // 车辆进出统计
  carRecordControllerFindCarRecordPage: {
    url: 'carRecordController/findCarRecordPage ',
    method: 'post'
  },
  // 确认修改订单
  orderConfirmUpdateOrder: {
    url: 'order/confirmUpdateOrder',
    method: 'post'
  },
  // 查看历史单价
  customerFindCustomerPriceHistoryByCustomerId: {
    url: 'customer/findCustomerPriceHistoryByCustomerId',
    method: 'post'
  },
  // 客户日结数据统计
  reportStatisticalControllerReportStatistic: {
    url: 'reportStatisticalController/reportStatistic',
    method: 'post'
  },
  // 纤细扣款
  accountControllerDeductAccoutDownLine: {
    url: 'accountController/deductAccoutDownLine',
    method: 'post'
  }




};

export default api;