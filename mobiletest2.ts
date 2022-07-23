import { Mobile } from "./Mobile"

let Nokia = new Mobile();
Nokia.setName("Nokia3210");
Nokia.printAll();

let iPhone = new Mobile();
iPhone.setName("iPhone3G");
iPhone.printAll();

let samsung = new Mobile();
samsung.setName("Samsung Galaxy 10");
samsung.printAll();

let mobiles = [Nokia, iPhone, samsung];

for (let i = 0; i < mobiles.length; i++) {
    console.log(JSON.stringify(mobiles))
}
