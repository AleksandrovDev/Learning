package Example;

import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;
import java.util.Scanner;

public class GameOfLife extends JFrame {

    static final int numOfGeneration = 100000;
    static JLabel GenerationLabel;
    static JLabel AliveLabel;
    static JLabel[][] grid;

    int gridSize;

    public GameOfLife() {
        super("Game Of Life");
        Scanner scan = new Scanner(System.in);
        this.gridSize = 15;  // scan.nextInt() working but test fails !?!?!?!?
        initialInitialization();
        startGame();
    }

    private void initialInitialization() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        setSize(gridSize * 15 + 16, gridSize * 15 + 14 * 5 - 2);
        setLocationRelativeTo(null);

        GenerationLabel = new JLabel("Generation #0");
        GenerationLabel.setName("GenerationLabel");
        GenerationLabel.setBounds(5,0,1000,10);

        AliveLabel = new JLabel("Alive: 0");
        AliveLabel.setName("AliveLabel");
        AliveLabel.setBounds(5,15,1000,10);

        FlowLayout flow = new FlowLayout();
        flow.setHgap(0);
        flow.setVgap(0);
        JPanel universeField = new JPanel(flow);
        universeField.setBounds(0,30,gridSize * 15,gridSize * 15);

        grid = new JLabel[gridSize][gridSize];
        Border border = BorderFactory.createLineBorder(Color.black, 1);
        for (int i = 0; i < gridSize; i++) {
            for (int j = 0; j < gridSize; j++) {
                grid[i][j] = new JLabel();
                grid[i][j].setOpaque(true);
                grid[i][j].setPreferredSize(new Dimension(15,15));
                grid[i][j].setMaximumSize(grid[i][j].getPreferredSize());
                grid[i][j].setBorder(border);
                universeField.add(grid[i][j]);
            }
        }

        add(GenerationLabel);
        add(AliveLabel);
        add(universeField);

        setLayout(null);
        setVisible(true);
        setAlwaysOnTop(true);
        setAlwaysOnTop(false);

    }

    private void startGame() {
        Universe universe = new Universe(gridSize);
        universe.letThereBeLight(numOfGeneration);
    }
}