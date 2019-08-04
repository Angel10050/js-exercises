/* 
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, 
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns 
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (centre, west),
and returns the number of restaurants in this area.
*/

/*
 A continuación se presentan algunos restaurantes en Glasgow. Cada restaurante tiene un nombre, el número de asientos totales,
El número de clientes en el restaurante en este momento y el menú con precios.

Queremos construir un objeto para simular una aplicación de Buscador de restaurantes (consulte a continuación aplicación de servicio de búsqueda de restaurantes).

1) Defina un método findAvailableRestaurants que toma un número de personas en parámetros y devuelve
todos los nombres de restaurantes que tienen el número requerido de asientos disponibles en este momento.

2) Defina un método findRestaurantServingDish que toma un nombre de plato en un parámetro y devuelve
Todos los nombres de restaurantes que sirven este plato.

3) Defina un método countNumberOfRestaurantsInArea que toma un área de Glasgow en el parámetro (centro, oeste),
y devuelve el número de restaurantes en esta zona.
 */

var restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center"
  },
  menu: ["pizza", "calzone", "salad"]
};

var restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west"
  },
  menu: ["salad", "chocolate cake", "roast lamb"]
};

var restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center"
  },
  menu: ["stew", "chocolate cake", "panini"]
};

var restaurants = [restaurant1, restaurant2, restaurant3];
const restaurantNames = restaurants => restaurants.name
/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

var restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    return restaurants.filter(restaurant => restaurant.totalSeats - restaurant.numberOfCustomers >= numberOfPeople).map(restaurantNames)
  },
  findRestaurantServingDish: function (dishName) {
    return restaurants.filter(restaurant => restaurant.menu.includes(dishName)).map(restaurantNames)
  },
  countNumberOfRestaurantsInArea: function (area) {
    return restaurants.filter(restaurant => restaurant.address.area === area).length
  }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

var restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
console.log(
  "Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: " +
  restaurantsAvailableFor5People
);

var restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
);
console.log(
  "Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: " +
  restaurantsServingSalad
);

var numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
);
console.log(
  "Number of restaurants in city centre: Expected result: 2, actual result: " +
  numberOfRestaurantsInCityCentre
);
