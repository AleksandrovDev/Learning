package life;
import javax.swing.*;
import javax.swing.border.Border;
import javax.swing.event.ChangeListener;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class Main {


    public static void main(String[] args) throws InterruptedException {

        new GameOfLife();
        GameOfLife.task.start();

    }
}

class Universe extends Thread{
    static public boolean isRunning = true;
    static public boolean isReset = false;
    public void run (){
                int fieldSize = 80;
                char[][] forEvolution = initialField(fieldSize);
                    while (!Thread.currentThread().isInterrupted()) {
                        try {
                    GameOfLife.generation.setText("Generation #" + GameOfLife.age);
                    GameOfLife.alive.setText("Alive: " + aliveCount(evolution(forEvolution)));
                    //showNextGeneration(evolution(forEvolution));
                    forEvolution = copyArray(evolution(forEvolution));
                            GameOfLife.age++;
                    Thread.sleep(GameOfLife.speed);
                   // System.out.println("Поток выполняется");
                } catch (InterruptedException ex) {
                    Thread.currentThread().interrupt();
                    continue;
                }
                synchronized (this) {
                    if (!isRunning) {
                        //System.out.println("Поток приостановлен");
                        while (!isRunning) {
                            try {
                                wait();
                            } catch (InterruptedException ex) {
                                ex.printStackTrace();
                            }
                        }
                        //System.out.println("Поток возобновил работу");
                    }
                    if(isReset){
                        //System.out.println("POtok restart");
                        GameOfLife.age=0;
                        currentThread().interrupt();
                        Universe task=new Universe();
                        task.start();
                        isReset=false;

                    }
                }
            }



    }
    public synchronized void changeThreadState() {
        isRunning = !isRunning;
        System.out.println(isRunning());
        notifyAll();
    }

    public synchronized boolean isRunning() {
        return isRunning;
    }
    public static void activity() throws InterruptedException {


    }
    static char[][] initialField(int fieldSize ) {
        Random random = new Random();
        char[][] array = new char[fieldSize][fieldSize];
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length; j++) {
                if (random.nextBoolean()) {
                    array[i][j] = 'O';
                    GameOfLife.grid[i][j].setBackground(Color.cyan);
                } else {
                    array[i][j] = ' ';
                    GameOfLife.grid[i][j].setBackground(Color.WHITE);
                }
            }
        }
        return array;
    }

    static char[][] evolution(char[][] arrayForEvolution) {
        char[][] secondGeneration = new char[arrayForEvolution.length][arrayForEvolution.length];
        int countAlive = 0;
        int dlina = arrayForEvolution.length - 1;

        for (int i = 0; i < arrayForEvolution.length; i++) {
            for (int j = 0; j < arrayForEvolution.length; j++) {

                if (i == 0 && j == 0) {
                    if (arrayForEvolution[i][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j] == 'O') {
                        countAlive++;
                    }

                } else if (i == dlina && j == dlina) {
                    if (arrayForEvolution[dlina - 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][0] == 'O') {
                        countAlive++;
                    }
                } else if (i == 0 && j == dlina) {
                    if (arrayForEvolution[0][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[1][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[1][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][0] == 'O') {
                        countAlive++;
                    }
                } else if (i == dlina && j == 0) {
                    if (arrayForEvolution[0][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][1] == 'O') {
                        countAlive++;
                    }
                } else if (i == 0) {
                    if (arrayForEvolution[i][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j + 1] == 'O') {
                        countAlive++;
                    }
                } else if (j == 0) {
                    if (arrayForEvolution[i - 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][dlina] == 'O') {
                        countAlive++;
                    }
                } else if (i == dlina) {
                    if (arrayForEvolution[dlina - 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina - 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[dlina][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[0][j + 1] == 'O') {
                        countAlive++;
                    }
                } else if (j == dlina) {
                    if (arrayForEvolution[i - 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][dlina] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][dlina - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][0] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][0] == 'O') {
                        countAlive++;
                    }
                } else {
                    if (arrayForEvolution[i][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j + 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i + 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][j] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][j - 1] == 'O') {
                        countAlive++;
                    }
                    if (arrayForEvolution[i - 1][j + 1] == 'O') {
                        countAlive++;
                    }

                }
                if (arrayForEvolution[i][j] == 'O' && (countAlive >= 2 && countAlive <= 3)) {
                    secondGeneration[i][j] = 'O';
                    GameOfLife.getColor(GameOfLife.grid[i][j]);

                } else if (arrayForEvolution[i][j] == ' ' && countAlive == 3) {
                    secondGeneration[i][j] = 'O';
                    GameOfLife.getColor(GameOfLife.grid[i][j]);
                    GameOfLife.border = BorderFactory.createLineBorder(GameOfLife.tcc.getColor(), 1);
                } else {
                    secondGeneration[i][j] = ' ';
                    GameOfLife.grid[i][j].setBackground(Color.WHITE);
                }
                countAlive = 0;
            }
        }
        return secondGeneration;
    }
    static char[][] copyArray(char[][] copy) {
        char[][] newArray = new char[copy.length][copy.length];
        for (int i = 0; i < copy.length; i++) {
            for (int j = 0; j < copy.length; j++) {
                newArray[i][j] = copy[i][j];
            }
        }
        return newArray;
    }

    static void showNextGeneration(char[][] show) {
        for (int i = 0; i < show.length; i++) {
            for (int j = 0; j < show.length; j++) {
                System.out.print(show[i][j]);
            }
            System.out.println();
        }
    }

    static int aliveCount(char[][] array) {
        int totalAlive = 0;
        for (char[] i : array) {
            for (int j : i) {
                if (j == 'O') {
                    totalAlive++;
                }

            }
        }
        return (totalAlive);
    }


}



