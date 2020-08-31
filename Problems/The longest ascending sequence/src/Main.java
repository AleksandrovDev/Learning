import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int[] array = new int[size];
        int maxcount = 1;

        for (int i = 0; i < array.length; i++) {
            array[i] = scanner.nextInt();
        }
        int count = 1;


        for (int i = 1; i < array.length; i++) {
            if (array[i] >= array[i - 1]) {
                count++;
                maxcount = count;
            } else if (count >= maxcount) {
                maxcount = count;
                count = 1;
            } else {
                count = 1;
            }
        }
        System.out.println(maxcount);
    }
}
