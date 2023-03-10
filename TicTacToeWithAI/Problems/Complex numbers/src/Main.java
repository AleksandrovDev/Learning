class Complex {

    double real;
    double image;

    // write methods here
    void add (Complex num) {
        real +=  num.real;
        image += num.image;

    }

    void subtract (Complex num) {
        this.real -=  num.real;
        this.image -=   num.image;

    }

}
   /* class Main{
    public static void main(String[] args) {
        Complex number = new Complex();
        number.real = 10;
        number.image = 4;

        Complex anotherNumber = new Complex();
        anotherNumber.real = 6;
        anotherNumber.image = 6;
        number.add(anotherNumber);
        System.out.println(number);
    }}*/