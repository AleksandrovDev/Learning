import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();


        if (input.length() < 4) {
            System.out.println("false");
        } else {
            String sub = input.substring(input.length() - 4);
            if ("burg".equals(sub)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
    }
}