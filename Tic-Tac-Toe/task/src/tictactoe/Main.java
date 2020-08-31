package tictactoe;

import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // write your code here
        Scanner scanner = new Scanner(System.in);
        String vvod = scanner.next();
        int j = 0;
        char[] line1 = {'|', ' ', vvod.charAt(0), ' ', vvod.charAt(1), ' ', vvod.charAt(2), ' ', '|', ' '};
        char[] line2 = {'|', ' ', vvod.charAt(3), ' ', vvod.charAt(4), ' ', vvod.charAt(5), ' ', '|', ' '};
        char[] line3 = {'|', ' ', vvod.charAt(6), ' ', vvod.charAt(7), ' ', vvod.charAt(8), ' ', '|', ' '};
        System.out.println("---------");
        System.out.println(line1);
        System.out.println(line2);
        System.out.println(line3);
        System.out.println("---------");
    }
}

