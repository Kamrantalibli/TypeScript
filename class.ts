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

class Buss implements Vehicle {
    //..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Avtobus X:${point.x} Y:${point.y} mekanina gedir.`);
        
    }
}
//wsede