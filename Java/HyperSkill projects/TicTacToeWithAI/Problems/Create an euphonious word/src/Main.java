import java.util.*;

public class Main {
    public static void main(String[] args) {
        // write your code here
        Scanner scanner = new Scanner(System.in);
        String input = scanner.next();
        char[] array = new char[input.length()];
        array = input.toCharArray();
        char[] vowels = new char[]{'e', 'i', 'o', 'u', 'y', 'a'};
        int countHowManyCharactersToAdd = 0;
        int countHowManyInARowVowels = 0;
        int countHowManyInARowConsonants = 0;
        boolean isVowels = false;

        for (int i = 0; i < input.length(); i++) {
            for (int j = 0; j < vowels.length; j++) {
                if (array[i] == vowels[j]) {
                    isVowels = true;
                    break;
                } else {
                    isVowels=false;

                }
            }

            if (isVowels) {
                countHowManyInARowVowels++;
                countHowManyInARowConsonants = 0;
            } else {
                countHowManyInARowConsonants++;
                countHowManyInARowVowels = 0;

            }

            if (countHowManyInARowVowels == 3 || countHowManyInARowConsonants == 3) {
                countHowManyCharactersToAdd++;
            }
            else if (countHowManyInARowVowels > 4 && countHowManyInARowVowels%2!=0 || countHowManyInARowConsonants > 4 && countHowManyInARowConsonants%2!=0) {
               countHowManyCharactersToAdd++;
            }

            //System.out.print(array[i]);

            /*System.out.print(countHowManyInARowConsonants+" consonants ");
            System.out.print(countHowManyInARowVowels+" vowels ");
            System.out.print(isVowels+" is vowels ");
            System.out.println(countHowManyCharactersToAdd);*/
        }

        /*for (int i: array){
            System.out.println((char)i);
        }*/
        System.out.println(countHowManyCharactersToAdd);
    }
}