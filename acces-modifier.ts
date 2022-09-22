interface Point {
    x: number,
    y:number
}

interface Passenger {
    name: string,
    phone: string
}

interface Vehicle{
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..

    constructor(private location:Point,private color?: string){ }

    travelTo(point: Point): void {
        console.log(`Taksi X:${this.location.x} Y:${this.location.y} dan  X:${point.x} Y:${point.y}  mekanina gedir.`);
        
    }
}

class Bus implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Avtobus X:${point.x} Y:${point.y} mekanina gedir.`);
        
    } 
}

let taxi_1: Taxi = new Taxi({x:2,y:5}, 'red');
taxi_1.travelTo({x:1,y:2});