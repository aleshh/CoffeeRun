(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
      $('#caffineLevelLabel').text('Strength: 30').removeClass().addClass('label label-success');
    });
  };

  function StrengthSliderHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  StrengthSliderHandler.prototype.addAdjustHandler = function() {
    console.log('Adding slider adjust handler for ');
    // console.log(this);
    // console.log(this.$formElement);
    this.$formElement.on('change', function(event) {
      var sliderClass = "label ";

      if (this.value <= 33) {
        sliderClass += "label-success";
      } else {
        if (this.value >= 66) {
          sliderClass += "label-danger";
        } else {
          sliderClass += "label-warning";
        }
      }
      $('#caffineLevelLabel').text('Strength: ' + this.value)
        .removeClass().addClass(sliderClass);

      console.log('Changing slider value to ' + this.value + ', label to ' + sliderClass);
    });
  };

  App.FormHandler = FormHandler;
  App.StrengthSliderHandler = StrengthSliderHandler;
  window.App = App;

})(window);
