import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;

public class Interface extends JFrame {

         void window () {
               // JFrame frame = new JFrame();

                 setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                 setSize(900, 900);
                 setVisible(true);
                 setResizable(true);


                 JPanel cells = new JPanel(); //field below
                 cells.setLayout(new GridLayout(10, 10, 0, 0));

                 add(cells);


                 Border border = BorderFactory.createLineBorder(Color.BLACK,2);

                 JLabel [][] panel = new JLabel[10][10];
                 for (int i=0;i<panel.length;i++){
                         for (int j=0; j<panel.length;j++){
                                panel[i][j]=new JLabel("s");
                                 panel[i][j].setPreferredSize(new Dimension(5,5));
                                 panel[i][j].setOpaque(true);
                                 panel[i][j].setBorder(border);
                                 panel[i][j].setBackground(Color.RED);
                                 add(panel[i][j]);
                         }
                 }

         }
}
