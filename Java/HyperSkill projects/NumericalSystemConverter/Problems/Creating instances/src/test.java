class A {

    private A() { }

    void invokeB() {
        B objB = new B(); // (1)
        int b = objB.b;
        System.out.println(b);
        //int c = objB.c;   // (3)
    }
}

class B {

    protected int b=1;
    private int c;

    public void invokeA() {
       // A objA = new A(); // (4)
    }
}