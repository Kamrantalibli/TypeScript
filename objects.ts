interface Point {
    x: number,
    y:number
}

interface Passenger {
    name: string,
    phone: string
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X:${point.x} Y:${point.y} mekanina gedir.`);
        
    }
}

class Bus implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Avtobus X:${point.x} Y:${point.y} mekanina gedir.`);
        
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x:1,y:2});
taxi_1.currentLocation = {x:2,y:5};

let taxi_2 = new Taxi();
taxi_2.travelTo({x:5,y:6});
taxi_2.currentLocation = {x:2,y:5};


console.log(taxi_1.currentLocation.x);
console.log(taxi_2.currentLocation.y);
