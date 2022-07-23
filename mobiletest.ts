import { Mobile } from "./Mobile"

let Nokia = new Mobile();
Nokia.setName("Nokia3210");
Nokia.is5G = true;
Nokia.cameraNumber = 4;
Nokia.printAll();

let iPhone = new Mobile();
iPhone.setName("iPhone3G");
iPhone.printAll();

let samsung = new Mobile();
samsung.setName("Samsung Galaxy 10");
samsung.printAll();

