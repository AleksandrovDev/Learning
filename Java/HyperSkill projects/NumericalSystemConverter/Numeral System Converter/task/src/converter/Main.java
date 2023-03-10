package converter;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
            String sourceRadix = scanner.nextLine();
        int checkedSourceRadix=0;
        int checkedBase=0;
            try{
               checkedSourceRadix=changeSourceRadix(sourceRadix);
            }
        catch (Exception e){
            System.out.println("error");
            System.exit(0);
        }
            String sourceNumber = scanner.nextLine();

        try{String base = scanner.nextLine();
            checkedBase=changeBase(base);
        }
        catch (Exception e){
            System.out.println("error");
            System.exit(0);
        }
            String decimalPart = " ";


            // if Integer
            if (checkTheNumber(sourceNumber)) {
                System.out.println(convertIntegerPart(sourceNumber, checkedSourceRadix, checkedBase));
            }
            //if fractured
            else {
                //divide by parts
                String newDecimal = convertIntegerPart(divideIntegerPart(sourceNumber), checkedSourceRadix, checkedBase); // new decimal part
                String fracturedPart = divideFracturedPart(sourceNumber); // fractured part
                String[] fracturedOutput = new String[5];

                //check in base 10 or not
                if (checkedSourceRadix == 10) {
                    //do without converting
                    double fracturedPartwith0 = (Double.valueOf(divideFracturedPart(sourceNumber))) / Math.pow(10, fracturedPart.length());
                    fracturedOutput = (transitionOfFracturedPart(fracturedPartwith0,checkedBase));
                } else {
                    //do the convert
                    double fracturedPartnew = convertFractureToDecimal(divideFracturedPart(sourceNumber), checkedSourceRadix); //new decimal fractured part
                    fracturedOutput = (transitionOfFracturedPart(fracturedPartnew,checkedBase));

                    //System.out.println(Arrays.toString(fracturedOutput));

                }
                String output2 = Arrays.toString(fracturedOutput).replace("[", "").replace("]", "").replace(",", "").replace(" ", "");
                System.out.println(newDecimal + "." + output2);
            }
        }
    //catch (Exception e){
       // System.out.println("error");
    //}}


//change source radix to Integer
    static public int changeSourceRadix(String sourceRadix){
try{
            return Integer.parseInt(sourceRadix);}
catch (Exception e){
    //System.out.println("error");

    return Integer.parseInt(sourceRadix);
}
            }

    //change base Integer
    static public int changeBase(String base){
        try{
            if(Integer.parseInt(base)>36||Integer.parseInt(base)<1){
                return 5/0;
            }
            else {
        return Integer.parseInt(base);}}
        catch (Exception e){
           // System.out.println("error");
            return 5/0;
        }
    }



    //check decimal or fractured
    static public boolean checkTheNumber(String sourceNumber) {
        int indexOfPoint = sourceNumber.indexOf(".");
        if (indexOfPoint == -1) {
            return true;
        } else {
            return false;
        }
    }

    // function for change fracture part to decimal
    static public double convertFractureToDecimal(String fractionPart, int sourceRadixx) {
        char[] fractionArray = fractionPart.toCharArray();
        //converting fractional part to decimal
        double sumFractinal = 0;

        for (int i = 0; i < fractionArray.length; i++) {
            //System.out.println(sourceRadixx);
            double c = Math.pow(sourceRadixx, (i + 1));
            //System.out.println(c);
            //if has letters
            int count = 10;
            if (fractionArray[i] >= 'a' && fractionArray[i] <= 'z') {
                for (int j = 'a'; j <= 'z'; j++) {
                    if (fractionArray[i] == j) {

                        sumFractinal = sumFractinal + count / c;

                    }
                    count++;
                }
            } else {
                sumFractinal = sumFractinal + (fractionArray[i] - 48) / c;
            }
        }
        //System.out.println(sumFractinal);
        return sumFractinal;
    }

    //Converting integer part of number
    public static String convertIntegerPart(String sourceNumber, int sourceRadix, int base) {
        String result = "";
        // source Radix or base = 1
        if (sourceRadix == 1) {
            result = Integer.toString(sourceNumber.length(), base);
        } else if (base == 1) {
            int number = Integer.valueOf(sourceNumber);
            for (int i = 1; i <= number; i++) {
                System.out.print(base);
            }
        } else {
            int decimalNumber = Integer.parseInt(sourceNumber, sourceRadix);
            result = Integer.toString(decimalNumber, base);
        }
        return result;
    }


    //dividing parts by "."
    public static String divideFracturedPart(String sourceNumber) {
        // dividing decimal and fracture parts
        int indexOfPoint = sourceNumber.indexOf(".");
        String decimalPart = sourceNumber.substring(0, indexOfPoint);
        String fractionPart = sourceNumber.substring(indexOfPoint + 1);
        return fractionPart;
    }

    public static String divideIntegerPart(String sourceNumber) {
        // dividing decimal and fracture parts
        int indexOfPoint = sourceNumber.indexOf(".");
        String decimalPart = sourceNumber.substring(0, indexOfPoint);
        return decimalPart;
    }


    //transition in new base for the fractured part

    public static String[] transitionOfFracturedPart(double fp, int checkedBase) {
        String[] output1 = new String[5];
        double fracturedPartnew2=fp;
        for (int i = 0; i < 5; i++) {
            //System.out.println(fracturedPartnew2);

            fracturedPartnew2 = (fracturedPartnew2* (double)checkedBase); // Oshibka, poluchaetsya Int
            //System.out.println(fracturedPartnew2);
            String[] output = String.valueOf(fracturedPartnew2).split("[.]"); // rzdelyaem do .
            int integerPart = Integer.parseInt(output[0]);  // videlyaem Integer
            //System.out.println(integerPart);
            double fracturedPart = Double.parseDouble(output[1]) / Math.pow(10, output[1].length());  //videlyaem fractured i perenosim .
            fracturedPartnew2 = fracturedPart; // new fractured part
            //System.out.println(fracturedPartnew);
            //convert to letter
            if (integerPart > 9) {
                //System.out.println(integerPart);
                for (int j = 10; j <= 35; j++) {
                    if (integerPart == j) {
                        char igrek = (char) (j + 87);
                        output1[i] = Character.toString(igrek);
                        //System.out.println(output[i]);
                        //System.out.println(j);
                    }
                }
            } else {

                output1[i] = Integer.toString(integerPart);
            }
            //System.out.println(output1[i]);
            //String with new fractured numbers
        }
        return output1;
    }


    public void toOcto(int decimal) {

        //decimal = scanner.nextInt();
        int i = 0;
        int[] array = new int[10];
        if (decimal < 8) {
            System.out.println(decimal);
        } else {
            for (; decimal >= 8; ) {
                if (decimal % 8 == 0) {
                    i++;
                    array[i] = 0;

                    break;
                } else {
                    i++;
                    array[i] = decimal % 8;

                    decimal /= 8;
                }
            }
            if (decimal < 9) {
                i++;
                array[i] = decimal;
            }

            System.out.print(array[1]);
        }
    }


    public void toBinary() {
        int decimal = 42;
        int i = 0;
        System.out.print(decimal + " = 0b");
        int[] array = new int[10];
        for (; decimal >= 1; decimal /= 2) {
            if (decimal % 2 == 0) {
                array[i] = 0;
                i++;
            } else if (decimal % 2 == 1) {
                array[i] = 1;
                i++;
            }
        }
        for (i = i - 1; i >= 0; i--) {
            System.out.print(array[i]);
        }
    }

    public void toHexadecimal() {
    }
    }




