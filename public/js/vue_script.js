/*var vm = new Vue({
  el: '#myID',
  data: {
    burgeritem: "Choose burger",
    menu: [{name: "Cheeseburger", calories: "550 kCal",gluten:true, lactose:true, img: "https://images.pexels.com/photos/1269665/pexels-photo-1269665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, {name: "Halloumi Burger", calories: "600 kCal", gluten:true, lactose:true, img: "https://images.pexels.com/photos/327135/pexels-photo-327135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, {name: "Spicy Burger", calories: "600 kCal", gluten:true, lactose:false, img: "https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}]
    //Hur använder jag menu.js istället?
  }
})*/


var vm = new Vue({
  el: '#myID',
  data: {
    burgeritem: "Choose burger",
    menu: food
    //Hur använder jag menu.js istället?
  }
})


var vm2 = new Vue({
  el: '#orders',
  methods: {
      placeOrder: function(id){
      this.click[id]
      return;
    }}

})
