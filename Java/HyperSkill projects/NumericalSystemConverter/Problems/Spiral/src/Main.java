

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[][] array = new int[n][n];
        int i;
        int j;
        int number = 1;
        int valuei = 0;
        int valuej = 0;

        while (number <= n * n) {

            for (j = valuej; j < n - valuej; j++) {
                i = valuei;
                array[i][j] = number;
                number++;
            }
            valuei++;
            for (i = valuei; i < n - valuej; i++) {
                j = n - valuei;
                array[i][j] = number;
                number++;
            }
            valuej++;

            for (j = n - valuej - 1; j >= valuej - 1; j--) {
                i = n - valuej;
                array[i][j] = number;
                number++;
            }
            for (i = n - valuei - 1; i >= valuej; i--) {
                j = valuej - 1;
                array[i][j] = number;
                number++;
            }

        }
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }

    }
}