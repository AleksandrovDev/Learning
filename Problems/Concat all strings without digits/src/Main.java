import java.util.Arrays;
import java.util.Scanner;

class ConcatenateStringsProblem {

    public static StringBuilder concatenateStringsWithoutDigits(String[] strings) {
        String input = Arrays.toString(strings);
        StringBuilder output = new StringBuilder(input);


        for (int i = 0; i < output.length(); i++) {
            if (output.charAt(i) <= '9' && output.charAt(i) >= '0') {
                output.deleteCharAt(i);
                i--;
            } else if (output.charAt(i) == ' ' || output.charAt(i) == ',' || output.charAt(i) == '[' || output.charAt(i) == ']') {
                output.deleteCharAt(i);
                i--;
            }
        }


        return output;
        // write your code with StringBuilder here
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] strings = scanner.nextLine().split("\\s+");
        StringBuilder result = concatenateStringsWithoutDigits(strings);
        System.out.println(result);
    }
}