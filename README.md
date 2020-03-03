cashDrawer.js
by Michelle Frattaroli

mishyjari.com
github.com/mishyjari

cashDrawer.js uses a Javascript Class called 'Drawer' which uses a constructor to initalize a new drawer with quantities for each denomination. The class can be called with no arguments to create an empty drawer, or passed arguments resembling the number of each denomination of currency in the drawer, large to small.

Since all paramaters default to zero, any currencies lower than your smallest can be left out, and they will be initalized with a count of 0.

The initalized drawer object's keys will be strings describing each currency denomination, while the values being objects in themselves containing the monetary value of one unit of currency (as an integer in cents) and the number of this currency in the drawer. An initalized empty drawer (new Drawer() with no arguments) will look as follows:

Drawer {
  hundreds: { value: 10000, count: 0 },
  fifties: { value: 5000, count: 0 },
  twenties: { value: 2000, count: 0 },
  tens: { value: 1000, count: 0 },
  fives: { value: 500, count: 0 },
  ones: { value: 100, count: 0 },
  quarters: { value: 25, count: 0 },
  dimes: { value: 10, count: 0 },
  nickles: { value: 5, count: 0 },
  pennies: { value: 1, count: 0 }
}

A drawer can be inialized with a starting register. Each argument passed will represent the number of each currency, high to low, in the drawer. For instance, if I had three twenties, ten ones and nothing else, I would set my drawer to:

new Drawer(0,0,3,0,0,1)

cashDrawer currently has three methods within its class:

- drawerTotal() takes no arguments and returns the total value of all currency in the drawer

- addMoney(denomination,qty) takes two arguments, updates the drawer and returns the full drawer object
  - denomination: the dollar-value of the currency being added, using a decimal float for coins
  - qty (optional, default = 1): the number of this currency being added.

- makeChange(total,bill) takes two arguments and makes change from the drawer using the largest possible currencies until the input is zeroed. It will print some useful information to the console and return an object whose keys are the name string for that currency and whose values are the number of that currency being given out. 
  - total will be the amount to be changed
  - bill (optional, default=0) will be removed from total before making change
