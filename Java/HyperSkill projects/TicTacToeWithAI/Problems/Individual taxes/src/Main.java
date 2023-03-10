import java.util.*;

public class Main {
    public static void main(String[] args) {
        // write your code here
        Scanner scanner = new Scanner(System.in);
        int numberOfCopmanies = scanner.nextInt();
        double[] yearlyIncomes = new double[numberOfCopmanies];
        double[] taxes = new double[numberOfCopmanies];
        double[] paidTax = new double[numberOfCopmanies];
        int companyWhoPayMost = 1;

        for (int i = 0; i < numberOfCopmanies; i++) {
            yearlyIncomes[i] = scanner.nextInt();
        }

        for (int i = 0; i < numberOfCopmanies; i++) {
            taxes[i] = scanner.nextInt();
        }


        for (int i = 0; i < yearlyIncomes.length; i++) {

                paidTax[i] = yearlyIncomes[i] * taxes[i] / 100;

        }
        if (numberOfCopmanies == 1) {
            System.out.println(1);
        } else {

            for (int i = 1; i < yearlyIncomes.length; i++) {
                if (paidTax[i] > paidTax[i - 1]) {
                    companyWhoPayMost = i + 1;
                }
            }
            System.out.println(companyWhoPayMost);
        }
    }
}