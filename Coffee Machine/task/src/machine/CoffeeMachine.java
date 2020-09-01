package machine;
import java.util.Scanner;
public class CoffeeMachine {
    static Scanner scanner = new Scanner(System.in);
    static boolean exit = false;
    static int water = 400;
    static int milk = 540;
    static int beans = 120;
    static int disposableCups = 9;
    static int money = 550;
    public static void main(String[] args) {
        while (!exit)
            desicion(ask());
    }
    static void currentState(int water, int milk, int beans, int disposableCups, int money) {
        System.out.println("The coffee machine has:");
        System.out.printf("%d of water\n%d of milk\n%d of coffee beans\n%d of disposable cups\n%d of money", water, milk, beans, disposableCups, money);
    }
    static String ask() {
        System.out.println("\nWrite action (buy, fill, take, remaining, exit): ");
        String decision = scanner.next();
        return decision;
    }
    static void buyCoffee() {
        System.out.println("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
        String coffetype = scanner.next();
        switch (coffetype) {
            case "1":
                checkSupplies(1);
                break;
            case "2":
                checkSupplies(2);
                break;
            case "3":
                checkSupplies(3);
                break;
            case "back":
                desicion(ask());
        }
    }
    static boolean checkSupplies(int type) {
        boolean flag = false;
        if (type == 1) {
            int waterNeeds = 250;
            int beansNeeds = 16;
            int disposalCupsNeeds = 1;
            if (water >= waterNeeds && beans >= beansNeeds && disposableCups >= disposalCupsNeeds) {
                System.out.println("I have enough resources, making you a coffee!");
                flag = true;
                water -= 250;
                beans -= 16;
                money += 4;
                disposableCups--;
            } else {
                if (water < waterNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "water!"));
                }
                if (beans < beansNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "beans"));
                }
                if (disposableCups < disposalCupsNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "Cups"));
                }
            }
        }
        if (type == 2) {
            int waterNeeds = 350;
            int milkNeeds = 75;
            int beansNeeds = 20;
            int disposalCupsNeeds = 1;
            if (water >= waterNeeds && milk >= milkNeeds && beans >= beansNeeds && disposableCups >= disposalCupsNeeds) {
                System.out.println("I have enough resources, making you a coffee!");
                flag = true;
                water -= 350;
                milk -= 75;
                beans -= 20;
                money += 7;
                disposableCups--;
            } else {
                if (water < waterNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "water!"));
                }
                if (beans < beansNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "beans"));
                }
                if (disposableCups < disposalCupsNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "cups"));
                }
                if (milk < milkNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "milk"));
                }
            }
        }
        if (type == 3) {
            int waterNeeds = 200;
            int milkNeeds = 100;
            int beansNeeds = 12;
            int disposalCupsNeeds = 1;
            if (water >= waterNeeds && milk >= milkNeeds && beans >= beansNeeds && disposableCups >= disposalCupsNeeds) {
                System.out.println("I have enough resources, making you a coffee!");
                flag = true;
                water -= 200;
                milk -= 100;
                beans -= 12;
                money += 6;
                disposableCups--;
            } else {
                if (water < waterNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "water!"));
                }
                if (beans < beansNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "beans"));
                }
                if (disposableCups < disposalCupsNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "cups"));
                }
                if (milk < milkNeeds) {
                    System.out.printf(String.format("Sorry, not enough %s", "milk"));
                }
            }
        }
        return flag;
    }
    static void desicion(String decision) {
        if ("buy".equals(decision)) {
            buyCoffee();
        }
        if ("fill".equals(decision)) {
            fillMachine();
        }
        if ("take".equals(decision)) {
            getMoney();
        }
        if ("remaining".equals(decision)) {
            currentState(water, milk, beans, disposableCups, money);
        }
        if ("exit".equals(decision)) {
            exit = true;
        }
    }
    static void fillMachine() {
        System.out.println("Write how many ml of water do you want to add: ");
        int waterAdd = scanner.nextInt();
        water += waterAdd;
        System.out.println("Write how many ml of milk do you want to add: ");
        int milkAdd = scanner.nextInt();
        milk += milkAdd;
        System.out.println("Write how many grams of coffee beans do you want to add: ");
        int beansAdd = scanner.nextInt();
        beans += beansAdd;
        System.out.println("Write how many disposable cups of coffee do you want to add: ");
        int disposableCupsAdd = scanner.nextInt();
        disposableCups += disposableCupsAdd;
    }
    static void getMoney() {
        System.out.printf("I gave you $%d", money);
        money = 0;
    }

}
