package life;

import javax.swing.*;
import javax.swing.border.Border;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.util.Hashtable;
import static javax.swing.SwingConstants.LEFT;

public class GameOfLife extends JFrame {
    static public int age;
    static public int speed=500;
    static JColorChooser tcc;
    static Border border = BorderFactory.createLineBorder(Color.BLACK, 1);
   static JLabel generation = new JLabel("Generation #0");
   static JLabel alive= new JLabel("Alive: "+0);
     static JLabel[][] grid;
    static int gridsize=80;
    static JToggleButton pause = new JToggleButton("Пауза");
    static JButton reset = new JButton("Сброс");
    static final Universe task = new Universe();
    final Thread t1 = Thread.currentThread();

    public GameOfLife() throws InterruptedException {
        super("Game of Life");
        pause.setName("PlayToggleButton");
        reset.setName("ResetButton");
            //setLocationRelativeTo(null);
            initialstate();
        }
        public void initialstate(){
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(900, 900);
        setVisible(true);
        setResizable(true);

        JPanel mainPanel = new JPanel(); //container for all window
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        add(mainPanel);

        JPanel topField = new JPanel(); // container for top
        topField.setLayout(new BoxLayout(topField, BoxLayout.Y_AXIS));
        generation.setOpaque(true);
        alive.setOpaque(true);
        generation.setName("GenerationLabel");
        alive.setName("AliveLabel");

            pause.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    task.changeThreadState();
                    String text = (Universe.isRunning) ? "Возобновить": "Пауза";
                    pause.setText(text);
                    System.out.println(Universe.isRunning);
                    System.out.println(t1.getState());
                    System.out.println(task.getState());
                }
            });

            JSlider slider = new JSlider(JSlider.HORIZONTAL,1,2000,100);
            slider.setValue(speed);
            slider.addChangeListener(new SliderListener());
            slider.setMajorTickSpacing(10);
            slider.setMinorTickSpacing(1);
            slider.setPaintTicks(true);
            slider.setPaintLabels(true);

            //Create the label table
            Hashtable labelTable = new Hashtable();
            labelTable.put( new Integer( 2000 ), new JLabel("Slow") );
            labelTable.put( new Integer( 1 ), new JLabel("Fast") );
            slider.setLabelTable( labelTable );

            //add colorChooser
            tcc = new JColorChooser(Color.BLACK);
            tcc.getSelectionModel().addChangeListener(new ChangeListener() {
                @Override
                public void stateChanged(ChangeEvent changeEvent) {
                    Color newColor = tcc.getColor();
                }
            });

            tcc.setBorder(BorderFactory.createTitledBorder(
                    "Choose Text Color"));
            add(tcc, BorderLayout.PAGE_END);

            reset.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent actionEvent) {
                    Universe.isReset=true;
                }
            });
        topField.add(pause);
        topField.add(reset);
        topField.add(generation);
        topField.add(alive);
            topField.add(slider);
        mainPanel.setAlignmentX(LEFT);
        mainPanel.add(topField);

        JPanel cells = new JPanel(); //field below
        cells.setLayout(new GridLayout(gridsize, gridsize, 0, 0));
        grid=new JLabel[gridsize][gridsize];
            for (int i = 0; i < gridsize; i++) {
                for (int j = 0; j < gridsize; j++) {
                    grid[i][j]=new JLabel("");
                    grid[i][j].setPreferredSize(new Dimension(1,1));
                    grid[i][j].setBorder(border);
                    grid[i][j].setOpaque(true);
                    cells.add(grid[i][j]);
                }
            }
            mainPanel.add(cells);
    }

    //function for cell change
    public static void getColor(JLabel o){
        o.setBackground(tcc.getColor());
    }

}

class SliderListener implements ChangeListener {
    public void stateChanged(ChangeEvent e) {
        JSlider source = (JSlider)e.getSource();
        if (!source.getValueIsAdjusting()) {
            GameOfLife.speed = (int)source.getValue();

        }
    }
}

