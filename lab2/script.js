//constructor function for HotWheelsCars
function HotWheelsCars(model, year, color, series, ages, trademark, hazards, imported, material, rating) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.series = series;
    this.ages = ages;
    this.trademark = trademark;
    this.hazards = hazards;
    this.imported = imported;
    this.material = material;
    this.rating = rating;
};  


    //Methods to interact with the hot wheels cars  
    this.displayInfo = function () {
        console.log(`Model: ${this.model}\nYear: ${this.year}\nColor: ${this.color}\nSeries: ${this.series}\nMaterial: ${this.material}\nRating: ${this.rating}`);
    };

    this.updateRating = function (newRating) {
        this.rating = newRating;
        console.log(`Rating for ${this.model} updated to ${this.rating}`);
    };

    this.changeColor = function (newColor) {
        this.color = newColor;
        console.log(`${this.model} is now ${this.color}`);
    };
}

//This will create instances for the hot wheels cars with certain attributes
const car1 = new HotWheelsCars('Hi-Roller II', 2021, 'Blue & Silver', 'Factory Fresh', '3+', 'Hot Wheels', 'Choking hazard', 'Mattel Inc. Canada', 'Die-cast metal', '5/5');

const car2 = new HotWheelsCars('72 Stingray Convertible', 1972, 'Silver', 'Vintage Collection', '3+', 'Hot Wheels', 'Choking hazard', 'Mattel Inc. Canada', 'Die-cast metal', '8/10');

//To store the two hot wheels cars in an array
const carCollection = [car1, car2];

function displayCollection() {
    carCollection.forEach(car => car.displayInfo());
}

