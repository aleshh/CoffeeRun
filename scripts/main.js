(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var StrengthSliderHandler = App.StrengthSliderHandler;

  var myTruck = new Truck('ncc-1701', new DataStore());

  window.myTruck = myTruck;

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);

  var strengthSliderHandler = new StrengthSliderHandler('#strengthLevel');
  strengthSliderHandler.addAdjustHandler();

  // myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
  // myTruck.createOrder({ emailAddress: 'james@bond.com', coffee: 'espresso'});
  // myTruck.createOrder({ emailAddress: 'q@bond.com', coffee: 'tea'});
  // myTruck.printOrders();
  // myTruck.deliverOrder('dr@no.com');
  // myTruck.printOrders();

})(window);
