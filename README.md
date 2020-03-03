Cash Drawer - Currently a simple JS Class object with a constructor and some methods

Initialize a new drawer with the number of each cash denomination as arguments in the following order:
- $100
- $50 
- $20
- $10
- $5
- $1
- $0.25
- $0.10
- $0.05
- $0.01
  Each argument has a default value of 0, so an empty drawer can be opened with no arguments, or smaller denominations (e.g., coins) ignored.

drawerTotal() will return a number of the total cash in the drawer

bills() will return an array of each bill value present in the drawer (in cents)

makeChange() takes one or two arguments.
  If given only one argument, it will issue change from that total.
  If provided a second argument, it will subtract that from the first and tender the difference.
  This method will subtract the bills from the drawer, log some useful info to the console and return an object whose keys are bill labels ('hundreds','fifties',etc) and values are the number of each bill being issued.
  
