var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X:".concat(point.x, " Y:").concat(point.y, " mekanina gedir."));
    };
    return Taxi;
}());
var Buss = /** @class */ (function () {
    function Buss() {
    }
    Buss.prototype.travelTo = function (point) {
        console.log("Avtobus X:".concat(point.x, " Y:").concat(point.y, " mekanina gedir."));
    };
    return Buss;
}());
