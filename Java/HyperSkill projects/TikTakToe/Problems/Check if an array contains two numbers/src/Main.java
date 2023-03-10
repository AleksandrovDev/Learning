import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        boolean flag = false;
        int size = scanner.nextInt();

        int[] array = new int[size];

        for (int i = 0; i < array.length; i++) {
            array[i] = scanner.nextInt();
        }

        int n = scanner.nextInt();
        int m = scanner.nextInt();

        for (int i = 1; i < array.length; i++) {
            if (array[i] == n && array[i - 1] == m) {
                flag = true;

            } else if (array[i] == m && array[i - 1] == n) {
                flag = true;
            }

        }
        System.out.println(flag);
    }
}