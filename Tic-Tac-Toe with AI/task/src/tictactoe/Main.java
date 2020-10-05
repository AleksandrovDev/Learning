package tictactoe;

import javax.swing.*;
import java.util.Random;
import java.util.Scanner;

import static java.lang.Integer.max;
import static java.lang.Integer.min;

public class Main {
    static public boolean finishedGame = false;
    static Scanner scanner = new Scanner(System.in);
    static boolean countingXandO;
    static boolean checkingInput = true;
    static Field field = new Field();
    public static char[][] workingField = field.input();
    static String winner = "";
    static char player1 = ' ';
    static char player2 = ' ';

    public static void main(String[] args) {
        int cases;
        player1='X';
        player2='O';
        // write your code here

        //field.input(); // draw initial field, with return of array

        //field.fieldAnalyze(workingField); //analyze of the field
        do {
            System.out.println("Input command:");
            cases = field.checkingInput(scanner.nextLine());
        }
        while (checkingInput);


        switch (cases){
            case 0: {
                field.outputField(workingField);
                Field computerEasy = new Field();
                do {

                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computerEasy.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                        }
                    if (!finishedGame){  //user actions
                    field.countingXandO(workingField);
                    field.enterCoordinates(workingField);
                    field.outputField(workingField);
                    field.fieldAnalyze(workingField);
                        field.printResults();}
                }
                while (!finishedGame);
            }
            case 1: {
                field.outputField(workingField);
                Field computerEasy = new Field();
                do {
                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computerEasy.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computerEasy.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 2: {
                field.outputField(workingField);
                do {
                    if (!finishedGame){  //user actions
                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();}
                }
                while (!finishedGame);
            }
            case 3: {
                field.outputField(workingField);
                Field computerEasy = new Field();
                do {
                    if (!finishedGame){  //user actions
                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();}

                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computerEasy.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                }
                while (!finishedGame);
            }
            case 4: {}
            case 5: {}
            case 6: {}
            case 7: {
                // user - medium
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //user actions
                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();}

                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                }
                while (!finishedGame);

            }
            case 8: {
                //medium-medium
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                }
                while (!finishedGame);
            }
            case 9: {
                //medium - user
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //user actions
                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);}
                    field.printResults();

                }
                while (!finishedGame);
            }
            case 10: {
                //medium - easy
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computer.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }


                }
                while (!finishedGame);
            }
            case 11: {
                //easy - medium
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computer.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 12: {
                //hard  - hard
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);
                        field.outputField(workingField);
                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();

                    }
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);
                        field.outputField(workingField);
                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();

                    }

                }
                while (!finishedGame);
            }
            case 13: {
                //hard - easy
                field.outputField(workingField);
                Field computer = new Field();
                do {

                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);
                        field.outputField(workingField);

                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computer.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                }
                while (!finishedGame);
            }
            case 14: {
                //hard - medium
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);

                        field.outputField(workingField);

                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 15: {
                //hard - user

                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);
                        field.outputField(workingField);
                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                    if (!finishedGame){  //user actions
                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 16: {
                //user - hard
                field.outputField(workingField);
                Field computer = new Field();

                do {
                    if (!finishedGame){  //user actions

                        field.countingXandO(workingField);
                        field.enterCoordinates(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();}

                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);

                        field.outputField(workingField);

                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 17: {
                //medium - hard
                field.outputField(workingField);
                Field computer = new Field();
                do {

                    if (!finishedGame){  //computerMediumActions
                        field.countingXandO(workingField);
                        computer.computerMedium(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);

                        field.outputField(workingField);

                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
            case 18: {
                //easy - hard
                field.outputField(workingField);
                Field computer = new Field();
                do {
                    if (!finishedGame){  //computerEasyActions
                        field.countingXandO(workingField);
                        computer.computerEasy(workingField);
                        field.outputField(workingField);
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }
                    if (!finishedGame){  //computerHardActions
                        field.countingXandO(workingField);
                        computer.bestmove(workingField);
                        field.outputField(workingField);
                        winner="";
                        field.fieldAnalyze(workingField);
                        field.printResults();
                    }

                }
                while (!finishedGame);
            }
        }
    }

}

class Field {



    int checkingInput(String input){
        String[] array = input.split(" ");
        if ("start".equals(array[0]) && array.length>=3){
            if ("easy".equals(array[1]) && "user".equals(array[2])){
                Main.checkingInput=false;
                return 0;
            }
            else if ("easy".equals(array[1]) && "easy".equals(array[2])){
                Main.checkingInput=false;
                return 1;
            }
            else if ("user".equals(array[1]) && "user".equals(array[2])){
                Main.checkingInput=false;
                return 2;
            }
            else if ("user".equals(array[1]) && "easy".equals(array[2])){
                Main.checkingInput=false;
                return 3;
            }
            else if ("user".equals(array[1]) && "medium".equals(array[2])){
                Main.checkingInput=false;
                return 7;
            }
            else if ("medium".equals(array[1]) && "medium".equals(array[2])){
                Main.checkingInput=false;
                return 8;
            }
            else if ("medium".equals(array[1]) && "user".equals(array[2])){
                Main.checkingInput=false;
                return 9;
            }
            else if ("medium".equals(array[1]) && "easy".equals(array[2])){
                Main.checkingInput=false;
                return 10;
            }
            else if ("easy".equals(array[1]) && "medium".equals(array[2])){
                Main.checkingInput=false;
                return 11;
            }
            else if ("hard".equals(array[1]) && "hard".equals(array[2])){
                Main.checkingInput=false;
                return 12;
            }
            else if ("hard".equals(array[1]) && "easy".equals(array[2])){
                Main.checkingInput=false;
                return 13;
            }
            else if ("hard".equals(array[1]) && "medium".equals(array[2])){
                Main.checkingInput=false;
                return 14;
            }
            else if ("hard".equals(array[1]) && "user".equals(array[2])){
                Main.checkingInput=false;
                return 15;
            }
            else if ("user".equals(array[1]) && "hard".equals(array[2])){
                Main.checkingInput=false;
                return 16;
            }
            else if ("medium".equals(array[1]) && "hard".equals(array[2])){
                Main.checkingInput=false;
                return 17;
            }
            else if ("easy".equals(array[1]) && "hard".equals(array[2])){
                Main.checkingInput=false;
                return 18;
            }



        }
        else if ("exit".equals(array[0])){
                Main.checkingInput=false;
                Main.finishedGame=true;
            return 4;}
        else {
            System.out.println("Bad parameters!");
            return 5;
        }
        return 6;
    }


    void countingXandO(char[][] charArray) {
        int countX = 0;
        int countO = 0;
        if (!Main.finishedGame) {
            countO = 0;
            countX = 0;
            for (int i = 0; i < 3; i++) {
                for (int j = 1; j < 4; j++) {
                    if (charArray[i][j] == 'X') {
                        countX++;
                    }
                    if (charArray[i][j] == 'O') {
                        countO++;
                    }
                }
            }
        }
        if (countO==countX){
            Main.countingXandO=true;
        }
        else {
            Main.countingXandO=false;
        }
        //Main.countingXandO = countO == countX;
    }

    char[][] input() {
        char[][] field = new char[3][5];
        int k = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 5; j++) {
                if (j == 0 || j == 4) {
                    field[i][j] = '|';
                } else {
                    field[i][j] = ' ';
                    k++;
                }
            }
        }
        return field;
    }

    void outputField(char[][] field) {
        if (!Main.finishedGame) {
            System.out.println("---------");
            for (char i[] : field) {
                for (char j : i) {
                    System.out.print(j + " ");
                }
                System.out.println();
            }
            System.out.println("---------");
        }
    }

    void printResults (){
        if ("Draw".equals(Main.winner)){
            System.out.println(Main.winner);
            Main.finishedGame=true;
        }
        else if ("".equals(Main.winner)){

        }
        else {
            System.out.println(Main.winner+" wins");
            Main.finishedGame=true;
        }

    }

    public void fieldAnalyze(char[][] charArray) {
        boolean flag = false;


        //proverka horizontal
        if (!Main.finishedGame) {
            for (int i = 0; i < charArray.length; i++) {
                if (charArray[i][2] == charArray[i][1] && charArray[i][2] == charArray[i][3] && (charArray[i][3] == 'X' || charArray[i][3] == 'O')) {
                    //System.out.println(charArray[i][2] + " wins");
                    //Main.finishedGame = true;
                    Main.winner = Character.toString( charArray[i][2]);
                    //break;
                }
            }
        }

        //proverka vertical
        if (!Main.finishedGame) {
            for (int j = 1; j < 4; j++) {
                if (charArray[1][j] == charArray[0][j] && charArray[1][j] == charArray[2][j] && (charArray[2][j] == 'X' || charArray[2][j] == 'O')) {
                   // System.out.println(charArray[1][j] + " wins");

                    //Main.finishedGame = true;
                    Main.winner =  Character.toString(charArray[1][j]);
                }
            }
        }

        //proverka diagonal sleva napravo

        if (!Main.finishedGame && charArray[0][1] == charArray[1][2] && charArray[1][2] == charArray[2][3] && (charArray[2][3]=='X'||charArray[2][3]=='O')) {
            //System.out.println(charArray[0][1] + " wins");
            //Main.finishedGame = true;
            Main.winner = Character.toString(charArray[0][1]);
        }
        //proverka diagonal sprava nalevo
        if (!Main.finishedGame && charArray[0][3] == charArray[1][2] && charArray[1][2] == charArray[2][1]&&(charArray[2][1]=='X'||charArray[2][1]=='O')) {
            //System.out.println(charArray[0][3] + " wins");
            //Main.finishedGame = true;
            Main.winner = Character.toString(charArray[0][3]);
        }


        //proverka est' li pustie mesta
        if (!flag && !Main.finishedGame) {

            for (int i = 0; i < 3; i++) {
                if (!flag) {
                    for (int j = 1; j < 4; j++) {
                        if (charArray[i][j] == ' ') {
                           // System.out.println("Game not finished");
                            flag = true;
                            break;
                        }

                    }
                }
            }
        }


        if (!flag && Main.winner.equals("")) {
            //Main.finishedGame = true;
            Main.winner = "Draw";
        }

    }

    //vvodim coordinati i proveryaem
    char[][] enterCoordinates(char[][] array) {
        boolean flag = true;
        do {
            System.out.print("Enter the coordinates: ");
            String inputLine = Main.scanner.nextLine();

            if (inputLine.charAt(0) <= '9' && inputLine.charAt(0) >= '0' && (inputLine.charAt(2) <= '9' && inputLine.charAt(2) >= '0')) {
                int firstCoord = inputLine.charAt(0) - 48;
                int secondCoord = inputLine.charAt(2) - 48;
                if (firstCoord <= 3 && firstCoord >= 1 && secondCoord <= 3 && secondCoord >= 1) {
                    if (array[Math.abs(secondCoord - 3)][firstCoord] == ' ') {
                        if (Main.countingXandO) { //Proveryaem kolichestvo X i O sovpadaet?
                            array[Math.abs(secondCoord - 3)][firstCoord] = 'O';
                            flag = false;
                        } else {
                            array[Math.abs(secondCoord - 3)][firstCoord] = 'O';
                            flag = false;
                        }

                    } else {
                        System.out.println("This cell is occupied! Choose another one!");
                    }
                } else {
                    System.out.println("Coordinates should be from 1 to 3!");
                }
            } else {
                System.out.println("You should enter numbers!");
            }
        }
        while (flag);
        return array;
    }








    void computerEasy(char[][] array) {
        boolean flag = true;
        Random random = new Random();
        if (!Main.finishedGame){
            System.out.println("Making move level \"easy\"");
            //boolean symbolToPut = Main.countingXandO; //if true put X, else Y.
            char symbolToPut;
            if(Main.countingXandO){
                symbolToPut='X';
            }
            else {symbolToPut='O';}

            do {
                int i = random.nextInt(2+1)+0;  //random number from 0 to 2
                int j = random.nextInt(2+1)+1;  //random number from 1 to 3
                if (array[i][j] == ' ') {
                    flag = false;
                    array[i][j] = symbolToPut;
                }
            }
            while (flag);

        }
    }

    void computerMedium (char[][] charArray){
        boolean flag = true;
        boolean foundChanceToWin = true;
        int i2=0;
       int j2=0;
        int count=0; // count how many same symbols already in line
        boolean isFreeCell = false;
        char symbolToPut;
        char symbolToCheck;
        if(Main.countingXandO){
            symbolToPut='X';
            symbolToCheck='O';
        }
        else {symbolToPut='O';
        symbolToCheck='X';}
        System.out.println(symbolToPut);
        Random random = new Random();
        if (!Main.finishedGame){
            System.out.println("Making move level \"medium\"");
            //boolean symbolToPut = Main.countingXandO; //if true put X, else Y.
            //1st check if can win
            //proverka horizontal
            if (foundChanceToWin) {
                for (int i = 0; i < charArray.length; i++) {
                    for (int j = 1; j < 4; j++) {
                        if (charArray[i][j] == symbolToPut) {
                            count++;
                        }
                        if (charArray[i][j] == ' ') {
                            isFreeCell = true;
                            i2=i;
                            j2=j;
                        }
                    }
                    if (count == 2 && isFreeCell) {
                        charArray[i2][j2]=symbolToPut;
                        System.out.println("worked");
                        foundChanceToWin = false;
                        break;
                    } else {
                        count = 0;
                        isFreeCell = false;

                    }
                }
            }

            //proverka vertical
            if(foundChanceToWin) {
                for (int j = 1; j < 4; j++) {
                    for (int i = 0; i < 3; i++){
                        if (charArray[i][j] == symbolToPut) {
                            count++;
                        }
                        if (charArray[i][j] == ' ') {
                            isFreeCell = true;
                            i2=i;
                            j2=j;
                        }
                    }
                    if (count == 2 && isFreeCell) {
                        charArray[i2][j2]=symbolToPut;
                        System.out.println("workedVertical");
                        foundChanceToWin = false;
                        break;
                    } else {
                        count = 0;
                        isFreeCell = false;

                    }

                    }
                }

            //proverka diagonal sleva napravo
            if(foundChanceToWin) {
                int j=1;
                for (int i=2;i>=0;i--){
                    if (charArray[i][j] == symbolToPut) {
                        count++;
                    }
                    if (charArray[i][j] == ' ') {
                        isFreeCell = true;
                        i2=i;
                        j2=j;
                    }

                    j++;
                }
                if (count == 2 && isFreeCell) {
                    charArray[i2][j2]=symbolToPut;
                    System.out.println("workedHorizontal sleva niz napravo vverh");
                    foundChanceToWin = false;

                } else {
                    count = 0;
                    isFreeCell = false;

                }

            }
            //proverka diagonal sprava nalevo
            if(foundChanceToWin) {
                int j=1;
                for (int i=0;i<=2;i++){
                    if (charArray[i][j] == symbolToPut) {
                        count++;
                    }
                    if (charArray[i][j] == ' ') {
                        isFreeCell = true;
                        i2=i;
                        j2=j;
                    }

                    j++;
                }
                if (count == 2 && isFreeCell) {
                    charArray[i2][j2]=symbolToPut;
                    System.out.println("workedHorizontal sleva verh napravo niz");
                    foundChanceToWin = false;

                } else {
                    count = 0;
                    isFreeCell = false;

                }
            }

            //2nd check if can block another to win

            if (foundChanceToWin){

                for (int i = 0; i < charArray.length; i++) {
                    for (int j = 1; j < 4; j++) {
                        if (charArray[i][j] == symbolToCheck) {
                            count++;
                        }
                        if (charArray[i][j] == ' ') {
                            isFreeCell = true;
                            i2=i;
                            j2=j;
                        }
                    }
                    if (count == 2 && isFreeCell) {
                        charArray[i2][j2]=symbolToPut;
                        System.out.println("worked");
                        foundChanceToWin = false;
                        break;
                    } else {
                        count = 0;
                        isFreeCell = false;

                    }
                }
            }

            //proverka vertical
            if(foundChanceToWin) {
                for (int j = 1; j < 4; j++) {
                    for (int i = 0; i < 3; i++){
                        if (charArray[i][j] == symbolToCheck) {
                            count++;
                        }
                        if (charArray[i][j] == ' ') {
                            isFreeCell = true;
                            i2=i;
                            j2=j;
                        }
                    }
                    if (count == 2 && isFreeCell) {
                        charArray[i2][j2]=symbolToPut;
                        System.out.println("workedVertical");
                        foundChanceToWin = false;
                        break;
                    } else {
                        count = 0;
                        isFreeCell = false;

                    }

                }
            }

            //proverka diagonal sleva napravo
            if(foundChanceToWin) {
                int j=1;
                for (int i=2;i>=0;i--){
                    if (charArray[i][j] == symbolToCheck) {
                        count++;
                    }
                    if (charArray[i][j] == ' ') {
                        isFreeCell = true;
                        i2=i;
                        j2=j;
                    }

                    j++;
                }
                if (count == 2 && isFreeCell) {
                    charArray[i2][j2]=symbolToPut;
                    System.out.println("workedHorizontal sleva niz napravo vverh");
                    foundChanceToWin = false;

                } else {
                    count = 0;
                    isFreeCell = false;

                }

            }
            //proverka diagonal sprava nalevo
            if(foundChanceToWin) {
                int j=1;
                for (int i=0;i<=2;i++){
                    if (charArray[i][j] == symbolToCheck) {
                        count++;
                    }
                    if (charArray[i][j] == ' ') {
                        isFreeCell = true;
                        i2=i;
                        j2=j;
                    }

                    j++;
                }
                if (count == 2 && isFreeCell) {
                    charArray[i2][j2]=symbolToPut;
                    System.out.println("workedHorizontal sleva verh napravo niz");
                    foundChanceToWin = false;

                } else {
                    count = 0;
                    isFreeCell = false;
                }
            }

            // 3rd step random move
            if(foundChanceToWin) {
                do {
                    int i = random.nextInt(2 + 1) + 0;  //random number from 0 to 2
                    int j = random.nextInt(2 + 1) + 1;  //random number from 1 to 3
                    if (charArray[i][j] == ' ') {
                        flag = false;
                        charArray[i][j] = symbolToPut;
                    }
                }
                while (flag);
            }

        }
    }

    //main minmax function
    void bestmove (char[][] field){
        System.out.println("Making move AI HARD");
        char symbolToPut;
        int bestScore = Integer.MIN_VALUE;
        int score;
        int [] move  = null;

        boolean isMaximazing;
        countingXandO(field);
        if(Main.countingXandO){
            symbolToPut='X';
            isMaximazing = false;
        }
        else{
            symbolToPut='O';
            isMaximazing=true;
        }
        for (int i = 0 ; i< 3;i++){
            for (int j=1 ; j<4;j++){
                if (field[i][j]==' '){
                    field[i][j]=Main.player1;
                   score = minimax(field, 0, false);
                   field[i][j]=' ';
                   if(score>bestScore){
                       bestScore=score;
                       move = new int[]{i,j};
                   }
                }
            }
        }
        field[move[0]][move[1]]=Main.player1;

    }

    int minimax(char [][] array, int depth, boolean isMaximazing){
        //System.out.println(depth + " depth");
        //outputField(array);
        char symbolToPut;
        countingXandO(array);
        if(Main.countingXandO){
            symbolToPut='X';
        }
        else{
            symbolToPut='O';
        }
        fieldAnalyze(array);
        //we need to check if somebody won
            if (!"".equals(Main.winner)){
                if ("X".equals(Main.winner)){
                    Main.winner="";
                    return 1;
                }
                else if ("O".equals(Main.winner)){
                    Main.winner="";
                    return -1;
                }
                else  {
                    Main.winner="";
                    return 0;
                }

            }

        if (isMaximazing){
            int bestScore = Integer.MIN_VALUE;
            for (int i = 0 ; i< 3;i++){
                for (int j=1 ; j<4;j++){
                    if (array[i][j]==' '){
                        array[i][j] = Main.player1;
                        int score = minimax(array,depth+1, false);
                        array[i][j]=' ';
                        bestScore =  Math.max (score,bestScore);
                    }
                }
            }
            return bestScore;
        }
        else {
            int bestScore = Integer.MAX_VALUE;
            for (int i = 0 ; i< 3;i++){
                for (int j=1 ; j<4;j++){
                    if (array[i][j]==' '){
                        array[i][j]=Main.player2;
                        int score = minimax(array,depth+1, true);
                        array[i][j]=' ';
                        bestScore = Math.min (score,bestScore);
                    }
                }
            }
            return bestScore;
        }
    }

}
