var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("phone.proto"),
    Penduduk = builder.build("Penduduk"),
    Person = Penduduk.Persons.Person;
    //message = builder.build('message');

// Construct with arguments list in field order:
//  var car = new Car("Rusty", new Car.Vendor("Iron Inc.", new Car.Vendor.Address("US")), Car.Speed.SUPERFAST);

// OR: Construct with values from an object, implicit message creation (address) and enum values as strings:
var person = new Person({

    "name" : "Alex",
    "id" : "123455",
    "email" : "alex31@gmail.com",
    "phonenumber" : {
      "number" : "999988"
      //"type" : "";

    }
});

// OR: It's also possible to mix all of this!

// Afterwards, just encode your message:
var buffer = person.encode();
console.log(buffer);

var dbuffer = Persons.decode(buffer);
console.log(dbuffer);

// And send it over the wire:
//var socket = ...;
//socket.send(buffer.toArrayBuffer()); // node.js: buffer.toBuffer()

// OR: Short...
//socket.send(car.toArrayBuffer()); // node.js: car.toBuffer()
