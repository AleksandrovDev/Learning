import java.util.Arrays;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        // put your code here
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] check = input.split(" ");
        int[][] array;
        StringBuilder obshaya = new StringBuilder(input);
        int p = 0;
        int k;
        for (k = 1; ; k++) {
            String check2 = scanner.nextLine();
            if ("end".equals(check2)) {

                String obshaya2 = obshaya.toString();
                String[] obshaya3 = obshaya2.split(" ");
                array = new int[k][check.length];
                for (int i = 0; i < k; i++) {
                    for (int j = 0; j < check.length; j++) {
                        array[i][j] = Integer.parseInt(obshaya3[p].trim());
                        p++;
                    }
                }
                break;
            } else {
                obshaya.append(" ")
                        .append(check2);


            }
        }

       /* for (int i = 0; i < k; i++) {
            for (int j = 0; j < check.length; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }*/


        int dlina = check.length - 1;


        int[][] arrayFinal = new int[k][check.length];

        if (dlina == 0 && k - 1 == 0) {
            System.out.println(array[0][0] * 4);
        } else if (k - 1 == 0) {
            int i = 0;
            //1 row

            for (int j = 0; j < check.length; j++) {
                if (j == 0) {
                    arrayFinal[i][j] = array[i][j + 1] + array[i][j] * 2 + array[i][check.length - 1];
                } else if (j == check.length - 1) {
                    arrayFinal[i][j] = array[i][j - 1] + array[i][j] * 2 + array[i][0];
                } else {
                    arrayFinal[i][j] = array[i][j - 1] + array[i][j + 1] + array[i][j] * 2;
                }

            }
            for (i = 0; i < k; i++) {
                for (int j = 0; j < check.length; j++) {
                    System.out.print(arrayFinal[i][j] + " ");
                }
                System.out.println();
            }
        } else if (dlina == 0) {                     //1 column
            int j = 0;
            for (int i = 0; i < k; i++) {
                if (i == 0) {
                    arrayFinal[i][j] = array[i + 1][j] + array[i][j] * 2 + array[k - 1][j];
                } else if (i == k - 1) {
                    arrayFinal[i][j] = array[i - 1][j] + array[i][j] * 2 + array[0][j];
                } else {
                    arrayFinal[i][j] = array[i - 1][j] + array[i + 1][j] + array[i][j] * 2;
                }

            }
            for (int i = 0; i < k; i++) {
                for (j = 0; j < check.length; j++) {
                    System.out.print(arrayFinal[i][j] + " ");
                }
                System.out.println();
            }

        } else {
            for (int i = 0; i < k; i++) {
                for (int j = 0; j < check.length; j++) {

                    if (i == 0 && j == 0) {
                        arrayFinal[i][j] = array[i][j + 1] + array[i + 1][j] + array[k - 1][j] + array[i][check.length - 1];
                    } else if (i == 0 && j == check.length - 1) {
                        arrayFinal[i][j] = array[i][j - 1] + array[i + 1][j] + array[k - 1][check.length - 1] + array[i][0];
                    } else if (i == k - 1 && j == 0) {
                        arrayFinal[i][j] = array[i][j + 1] + array[i - 1][j] + array[k - 1][check.length - 1] + array[0][j];
                    } else if (i == k - 1 && j == dlina) {
                        arrayFinal[i][j] = array[i][j - 1] + array[i - 1][j] + array[0][check.length - 1] + array[i][0];
                    } else if (i == 0) {
                        arrayFinal[i][j] = array[k - 1][j] + array[i + 1][j] + array[i][j + 1] + array[i][j - 1];
                    } else if (j == 0) {
                        arrayFinal[i][j] = array[i - 1][j] + array[i + 1][j] + array[i][j + 1] + array[i][dlina];
                    } else if (i == k - 1) {
                        arrayFinal[i][j] = array[i - 1][j] + array[0][j] + array[i][j + 1] + array[i][j - 1];
                    } else if (j == dlina) {
                        arrayFinal[i][j] = array[i - 1][j] + array[i + 1][j] + array[i][0] + array[i][j - 1];
                    } else if (i == k - 1 && j == 1) {
                        arrayFinal[i][j] = array[i - 1][j] + array[0][j] + array[i][j + 1] + array[i][j - 1];
                    } else {
                        arrayFinal[i][j] = array[i + 1][j] + array[i - 1][j] + array[i][j + 1] + array[i][j - 1];
                    }

                }
            }
            //arrayFinal[k - 1][1] =  array[k - 1 - 1][1] + array[0][1] + array[k - 1][] + array[k - 1][];
            ;
            for (int i = 0; i < k; i++) {
                for (int j = 0; j < check.length; j++) {
                    System.out.print(arrayFinal[i][j] + " ");
                }
                System.out.println();
            }

        }


    }


}
