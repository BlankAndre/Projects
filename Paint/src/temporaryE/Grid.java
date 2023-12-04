package temporaryE;

import org.academiadecodigo.simplegraphics.graphics.Rectangle;

public class Grid {
    public static final int PADDING = 10;
    public static final int CELLSIZE = 20;//40 antes
    private int rows;
    private int cols;
    private Squares [][] squares;
    public Grid(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;

        squares = new Squares[rows][cols];

        for (int row = 0; row < rows; row++){
            for (int col = 0; col < cols; col ++){
                squares[row][col] = new Squares(row, col);
            }
        }
    }

    public Squares findSquare(int row,int col){
        return squares[row][col];
    }
    public void cleanAll(){
        for (int row = 0; row < rows; row++){
            for (int col = 0; col < cols; col ++){
                squares[row][col].erase();
            }
        }
    }

    public int getRows() {
        return rows;
    }

    public int getCols() {
        return cols;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder();
        for (int row = 0 ; row < rows; row++){
            for (int col = 0; col < cols; col++){
                str.append(squares[row][col]);
            }
            str.append("\n");
        }
        return str.toString();
    }
    public void gridToString(String grid){
        int index = 0;

        for (int row = 0; row < rows; row++){
            for (int col = 0; col < cols; col++) {
                Squares square = squares[row][col];
                if ((grid.charAt(index) == '0')) {
                    square.erase();
                } else {
                    square.paint();
                }
                index++;
            }
            index++;
        }
    }

    public void drawGrid() {//podes apagar
        int height = rows * CELLSIZE;
        int width = cols * CELLSIZE;

        Rectangle bigRect = new Rectangle(10, 10, width, height);
        bigRect.draw();

    }

    public static void main(String[] args) {
       // Grid grid = new Grid(20,20);
        MapEditor mapEditor = new MapEditor(20,20);
        new InputHandler(mapEditor);
       // try2.drawGrid()
    }
}
