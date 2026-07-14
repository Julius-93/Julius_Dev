const car = {
    name: "Mazda",
    model_code: "5BA-BPFP",
    top_speed: "210",
    color: "Metallic Gray",


    engine_information: {
        cylinders: 4,
        capacity: "2000cc",
        fuel: "Petrol",
        transmission: "Manual",
        drivetrain: "4WD"
    },

    manufacture: {
        name: "Mazda Motor Corporation",
        aka: "Mazda3",
        country: "Japan"
    },

    fun_fact: "It has really good sports handling capabilities and best designs",


    alert_info: function () {
        alert(
            `Car Information

Name: ${this.name}
Model: ${this.model}
Top Speed: ${this.top_speed} km/h
Color: ${this.color}

Engine Information
- Cylinders: ${this.engine_information.cylinders}
- Capacity: ${this.engine_information.capacity}
- Fuel: ${this.engine_information.fuel}
- Transmission: ${this.engine_information.transmission}
- Drivetrain: ${this.engine_information.drivetrain}

Manufacturer
- Name: ${this.manufacture.name}
- AKA: ${this.manufacture.aka}
- Country: ${this.manufacture.country}

fun_fact: ${this.fun_fact.fun_fact}`
        );
    }
};

// Call the function
car.alert_info();

