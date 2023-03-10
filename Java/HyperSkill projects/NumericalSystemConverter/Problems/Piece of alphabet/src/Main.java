import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        String vvod = scanner.next();
        char[] array = vvod.toCharArray();
        boolean flag = false;

        if (array.length == 1) {
            flag = true;
        } else {

            for (int i = 1; i < array.length; i++) {
                if (array[i] - array[i - 1] == 1) {
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
        }
        System.out.println(flag);

    }
}