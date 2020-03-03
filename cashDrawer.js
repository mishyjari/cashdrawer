class Drawer {
	constructor(hundreds=0,fifties=0,twenties=0,tens=0,fives=0,ones=0,quarters=0,dimes=0,nickles=0,pennies=0) {
		this.hundreds = { value: 10000, count: hundreds };
		this.fifties = { value: 5000, count: fifties };
		this.twenties = { value: 2000, count: twenties };
		this.tens = { value: 1000, count: tens };
		this.fives = { value: 500, count: fives };
		this.ones = { value: 100, count: ones };
		this.quarters = { value: 25, count: quarters };
		this.dimes = { value: 10, count: dimes };
		this.nickles = { value: 5, count: nickles };
		this.pennies = { value: 1, count: pennies };
	}
	drawerTotal() {
		let total = 0;
		Object.entries(this).forEach(i => {
			total += i[1].value * i[1].count
		});
		return total/100;
	}
	bills() {
		let bills = [];
		Object.entries(this).forEach(i => {
			bills.push(i[1].value)
		});
		return bills;
	}
	makeChange(total,bill=0) {
		// Catch invalid inputs
		if ( isNaN(Number(total)) || isNaN(Number(bill)) || total < bill ) {
			console.log('makeChange takes one or two arguments.\n If given only one argument, it will issue change from that total.\n If provided a second argument, it will subtract that from the first and tender the difference.\n\n. Please use only integers or floats and make sure the first argument is greater than or equal to the second');
			return;
		};

		total -= bill;

		console.log('Change requested: $' + total);
		console.log('Current cash drawer: $' + this.drawerTotal());

		if ( this.drawerTotal() < total ) {
			console.log('Insufficient funds')
                	return 'Insuffient funds';
		}
		total *= 100;
		let drawer = Object.values(this);
		
		let i = 0;
		let change = {};

		while ( total > 0 && i < drawer.length ) {
			let label = (Object.keys(this))[i];
			let count = () => {
				try {
					return (Object.values(this))[i].count;
				} catch { return 0 }
			};
			
			// Iterate to the largest denomination less than owed money
			if ( total < drawer[i].value || drawer[i].count === 0 ) {
				i++;
			}

			else  {
				// Subtract this bill from total
				total -= drawer[i].value;
				// Remove bill from drawer
				drawer[i].count -= 1;
		
				// Add key/value pairs to change object
				if ( !change[label] ) { 
					change[label] = 1;
				}
				else { change[label] += 1 }	
			};
		};

		console.log('Issue Following Change:');
		console.log(change)
		console.log('Drawer after change:');
		console.log(this)
		console.log('Current Drawer Total: $' + this.drawerTotal());
		return change;		
	}
	addMoney(denomination,qty) {
		let drawer = Object.values(this);
		console.log(drawer[0].value)
		drawer.forEach(i => {
			if ( i.value == denomination*100) 
				{ i.count += qty }
			else {
				return 'please enter a valid denomination'
			};
		});
		console.log(drawer)
	}
}

let myDrawer = new Drawer(5,5,20,20,20,50,100,100,100,100)
let emptyDrawer = new Drawer()

//console.log(myDrawer.makeChange(10,4.90))

//console.log(emptyDrawer.addMoney(100,5))
//console.log(emptyDrawer.addMoney(.25,100))
//console.log(myDrawer);

//console.log(myDrawer.drawerTotal());

//console.log(myDrawer.bills());

//myDrawer.makeChange()

//myDrawer.test();
//console.log(myDrawer.makeChange(100.34))

//console.log(myDrawer.drawerTotal())
