var Rooms = [{
  name: "ห้องเดี่ยว",
  person: 1,
  price: 500
}, {
  name: "ห้องคู่",
  person: 2,
  price: 800
}, {
  name: "ห้องกลาง",
  person: 5,
  price: 1500
}, {
  name: "ห้องพักรวม",
  person: 15,
  price: 3000
}];

function calculate() {
  var guest = document.getElementById('guest').value;
  var total = document.getElementById('total');
  var price = 0;

  if (guest > 0) {
    do {
      var roomIndex = Math.max.apply(null, Rooms.map(function(room, index) {
        if (guest >= room.person) { 
          return index;
        } else {
          return false;
        }
      }));
      price += Rooms[roomIndex].price;
      guest -= Rooms[roomIndex].person;
    } while (guest > 0);
  }
  
  total.innerHTML = price;
}

