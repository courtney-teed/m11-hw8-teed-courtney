class Desserts {
	constructor(type, calories) {
		this.type = type;
		this.calories = calories;
	}
}

class IceCream extends Desserts {
	constructor() {
		super(type, calories);
		this.flavor = flavor;
		this.scoops = scoops;
	}
}