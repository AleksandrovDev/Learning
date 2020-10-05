import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        int arraySize = scanner.nextInt();
        int[] array = new int[arraySize];
        int number;
        boolean contain = false;

        for (int i = 0; i < arraySize; i++) {
            array[i] = scanner.nextInt();
        }
        number = scanner.nextInt();

        for (int i : array) {
            if (number == i) {
                contain = true;
                break;
            }
        }
        System.out.println(contain);
    }
}