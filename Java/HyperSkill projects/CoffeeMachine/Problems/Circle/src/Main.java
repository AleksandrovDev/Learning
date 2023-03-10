class Circle {

    double radius;

    // write methods here

    public double getLength() {
        return Math.PI * this.radius * 2;
    }

    public double getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}