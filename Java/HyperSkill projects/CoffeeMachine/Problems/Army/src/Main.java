class Army {

    public static void createArmy() {
        // Implement this method
        Unit unit1 = new Unit("Nikita");
        Unit unit2 = new Unit("Nikit");
        Unit unit3 = new Unit("Niki");
        Unit unit4 = new Unit("Nik");
        Unit unit5 = new Unit("Ni");

        Knight knight1 = new Knight("kni1");
        Knight knight2 = new Knight("kni2");
        Knight knight3 = new Knight("kni3");


        General general = new General("Gen1");
        Doctor doctor1 = new Doctor("doc1");

    }


    // Don't change the code below
    static class Unit {
        static String nameUnit;
        static int countUnit;

        public Unit(String name) {
            countUnit++;
            nameUnit = name;

        }
    }

    static class Knight {
        static String nameKnight;
        static int countKnight;

        public Knight(String name) {
            countKnight++;
            nameKnight = name;

        }
    }

    static class General {
        static String nameGeneral;
        static int countGeneral;

        public General(String name) {
            countGeneral++;
            nameGeneral = name;

        }
    }

    static class Doctor {
        static String nameDoctor;
        static int countDoctor;

        public Doctor(String name) {
            countDoctor++;
            nameDoctor = name;

        }
    }

    public static void main(String[] args) {
        createArmy();
        System.out.println(Unit.countUnit);
        System.out.println(Knight.countKnight);
        System.out.println(General.countGeneral);
        System.out.println(Doctor.countDoctor);
    }

}