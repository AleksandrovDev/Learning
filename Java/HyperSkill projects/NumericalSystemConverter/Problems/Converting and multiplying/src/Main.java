import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        int i = 0;
        String[] vvod = new String[100];
        while (!"0".equals(vvod[i])) {
            vvod[i] = scanner.next();
            if (vvod[i].equals("0")) {
                i--;
                break;
            }
            i++;
        }
        int j = 0;
        do {
            try {
                System.out.println(Integer.parseInt(vvod[j]) * 10);
            } catch (Exception e) {
                System.out.println("Invalid user input: " + vvod[j]);
            }
            j++;
        }
        while (j <= i);
    }
}