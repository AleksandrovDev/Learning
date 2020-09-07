import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        String vvod = scanner.next();
        int number = scanner.nextInt();
        if (number > vvod.length()) {
            System.out.println(vvod);
        } else {

            String novaya = vvod.substring(0, number);
            String ostatok = vvod.substring(number);
            System.out.println(ostatok + novaya);
        }
    }
}