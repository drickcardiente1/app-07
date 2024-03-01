"use strict";
class site {
  constructor(url, template) {
    this.url = url;
    this.template = template;
  }
  async load_pages() {
    for (let val of this.template) {
      await $.ajax({
        url: val.url,
        method: "POST",
        dataType: "JSON",
        success: function (data) {
          layout.set(val.template, data);
        },
        error: function (request, error) {
          alert(error);
        },
      });  
    }
  }
}

var Site = new site(window.location.pathname, [
  { url: "/adstemplate/add_bike", template: "add_bike" },
  { url: "/adstemplate/bike_list", template: "bike_list" },
  { url: "/adstemplate/booking_list", template: "booking_list" },
  { url: "/adstemplate/booking_report", template: "booking_report" },
  { url: "/adstemplate/brand_list", template: "brand_list" },
  { url: "/adstemplate/category_list", template: "category_list" },
  { url: "/adstemplate/client_list", template: "client_list" },
  { url: "/adstemplate/client_profile", template: "client_profile" },
  { url: "/adstemplate/dashboard", template: "dashboard" },
  { url: "/adstemplate/layer-index", template: "layer-index" },
  { url: "/adstemplate/layer-s-in", template: "layer-s-in" },
  { url: "/adstemplate/profile", template: "profile" },
]);

await Site.load_pages();