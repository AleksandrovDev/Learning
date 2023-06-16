type Car = {
  speed: number;
}

interface BMW extends Car {
  color: string;
}

type BMWM5 = Car | BMW;

const m5: BMWM5 = {
  color: '4',
  speed: 1,
}

class Vehicle implements Car {
  speed: number = 1;
}

class AirPlane implements Vehicle {
  speed: number = 1;
}

class Bus extends Vehicle {}

