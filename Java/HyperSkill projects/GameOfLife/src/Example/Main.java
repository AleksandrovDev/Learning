package Example;

import java.awt.*;
import java.util.Random;

public class Main {
    public static void main(String[] args) {

        new GameOfLife();
    }
}

class Universe {

    Random rand;
    static boolean[][] currentGeneration;
    static int age;
    static int alive;

    Universe(int size) {
        currentGeneration = new boolean[size][size];
        rand = new Random();
        age = 0;

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                currentGeneration[i][j] = rand.nextBoolean();
                if (currentGeneration[i][j]) {
                    GameOfLife.grid[i][j].setBackground(Color.BLACK);
                } else {
                    GameOfLife.grid[i][j].setBackground(Color.WHITE);
                }
            }
        }

        livesCount(currentGeneration);
        GameOfLife.GenerationLabel.setText("Generation# " + Universe.age);
        GameOfLife.AliveLabel.setText("Alive: " + Universe.alive);
    }

    void letThereBeLight(int num) {
        while (num-- > 0) {
            pause();
            LifeSimulator.nextGeneration(currentGeneration);
            copy(currentGeneration, LifeSimulator.nextGen);
        }
    }

    void pause() {
        try {
            Thread.sleep(1111);
        }
        catch (InterruptedException e) {
            System.out.println("" + e);
        }
    }

    void copy(boolean[][] targetArr, boolean[][] copiedArr) {
        for (int i = 0; i < targetArr.length; i++) {
            System.arraycopy(copiedArr[i], 0, targetArr[i], 0, targetArr[i].length);
        }
    }

    static void livesCount(boolean[][] arr) {
        alive = 0;
        for (boolean[] i : arr) {
            for (boolean j : i) {
                alive += j ? 1 : 0;
            }
        }
    }
}

class LifeSimulator {

    static boolean[][] nextGen;

    static void nextGeneration(boolean[][] currGen) {
        nextGen = new boolean[currGen.length][currGen.length];

        for (int i = 0; i < nextGen.length; i++) {
            for (int j = 0; j < nextGen[i].length; j++) {

                final int top = i == 0 ? currGen.length - 1 : i - 1;
                final int bot = i == currGen.length - 1 ? 0 : i + 1;
                final int left = j == 0 ? currGen[i].length - 1 : j - 1;
                final int right = j == currGen[i].length - 1 ? 0 : j + 1;

                boolean[] neighbors = new boolean[8];
                neighbors[0] = currGen[top][left];         //  NW
                neighbors[1] = currGen[top][j];            //  N
                neighbors[2] = currGen[top][right];        //  NE
                neighbors[3] = currGen[i][right];          //  E
                neighbors[4] = currGen[bot][right];        //  SE
                neighbors[5] = currGen[bot][j];            //  S
                neighbors[6] = currGen[bot][left];         //  SW
                neighbors[7] = currGen[i][left];           //  W

                int numOfPopulated = 0;
                for (boolean neighbor : neighbors) {
                    if (neighbor) {
                        numOfPopulated++;
                    }
                }

                nextGen[i][j] = numOfPopulated >= 2
                        && numOfPopulated <= 3
                        && (numOfPopulated == 3 || currGen[i][j]);

                if (nextGen[i][j]) {
                    GameOfLife.grid[i][j].setBackground(Color.BLACK);
                } else {
                    GameOfLife.grid[i][j].setBackground(Color.WHITE);
                }
            }
        }

        Universe.livesCount(nextGen);
        Universe.age++;
        GameOfLife.GenerationLabel.setText("Generation# " + Universe.age);
        GameOfLife.AliveLabel.setText("Alive: " + Universe.alive);
    }
}