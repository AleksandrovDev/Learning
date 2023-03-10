import java.util.Scanner;

class Main {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // put your code here
        int sizeN = scanner.nextInt();
        int sizeM = scanner.nextInt();
        int[][] array = new int[sizeN][sizeM];
        int[][] array2 = new int[sizeM][sizeN];
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < sizeM; j++) {
                array[i][j] = scanner.nextInt();
            }
        }
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < sizeM; j++) {
                array2[j][sizeN - i - 1] = array[i][j];
            }
        }
        for (int[] i : array2) {
            for (int j : i) {
                System.out.print(j + " ");
            }
            System.out.println();
        }

    }
}