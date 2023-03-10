import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int[] summa = new int[size];
        int sum = 0;

        for (int i = 0; i < summa.length; i++) {
            summa[i] = scanner.nextInt();
        }
        for (int i : summa) {
            sum += i;
        }
        System.out.println(sum);

    }
}