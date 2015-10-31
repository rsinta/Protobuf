var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("complex.proto"),
    Game = builder.build("Game"),
    Car = Game.Cars.Car;
    //message = builder.build('message');

// Construct with arguments list in field order:
//  var car = new Car("Rusty", new Car.Vendor("Iron Inc.", new Car.Vendor.Address("US")), Car.Speed.SUPERFAST);

// OR: Construct with values from an object, implicit message creation (address) and enum values as strings:
var car = new Car({
    "model": "Rusty",
    "vendor": {
        "name": "Iron Inc.",
        "address": {
            "country": "US"
        }
    },
    "speed": "SUPERFAST" // also equivalent to "speed": 2
});

// OR: It's also possible to mix all of this!

// Afterwards, just encode your message:
var buffer = car.encode();
console.log(buffer);

var dbuffer = Car.decode(buffer);
console.log(dbuffer);

// And send it over the wire:
//var socket = ...;
//socket.send(buffer.toArrayBuffer()); // node.js: buffer.toBuffer()

// OR: Short...
//socket.send(car.toArrayBuffer()); // node.js: car.toBuffer()
