/*var vm = new Vue({
  el: '#myID',
  data: {
    burgeritem: "Choose burger",
    menu: [{name: "Cheeseburger", calories: "550 kCal",gluten:true, lactose:true, img: "https://images.pexels.com/photos/1269665/pexels-photo-1269665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, {name: "Halloumi Burger", calories: "600 kCal", gluten:true, lactose:true, img: "https://images.pexels.com/photos/327135/pexels-photo-327135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, {name: "Spicy Burger", calories: "600 kCal", gluten:true, lactose:false, img: "https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}]
    //Hur använder jag menu.js istället?
  }
})*/

var socket = io();

/*function evaluateCheckboxes(){
  return; //what should I display here?
*/

var vm = new Vue({
  el: '#orderPage',
  data: {
    burgeritem: "Choose burger",
    menu: food,
    orderDetails: [],
    nameOrderedBurger: [],
    orders: {},
    details: {x: 0, y: 0},
    lastorder: 0
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
  /*  placeOrder: function (value){
        this.nameOrderedBurger = evaluateCheckboxes();
        /*console.log('Clicked '+value);
    },*/
    getNext: function () {
      this.lastorder = this.lastorder + 1
      return this.lastorder;
    },
    addOrder: function (event) {
      if (this.nameOrderedBurger.length !==0){
      socket.emit('addOrder', { orderId: this.getNext(),
                                details: this.details,
                                orderItems: vm.nameOrderedBurger,
                              });
      }                        
    },

    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.details = { x: event.clientX - 10 - offset.x,
                      y: event.clientY - 10 - offset.y };
        console.log(this.orders);
    }

  }

})
