import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
    //..

    constructor(private _location:Point,private color?: string){ }

    travelTo(point: Point): void {
        console.log(`Taksi X:${this._location.x} Y:${this._location.y} dan  X:${point.x} Y:${point.y}  mekanina gedir.`);
    }

    get location() {
        return this._location
    }

    set location(value: Point){
        if(value.x<0 || value.y<0){
            throw new Error("Koordinat melumatlari negativdir!!!");
        }
        this._location = value;
    }
}