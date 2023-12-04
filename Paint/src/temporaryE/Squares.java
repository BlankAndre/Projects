package temporaryE;

import org.academiadecodigo.simplegraphics.graphics.Rectangle;
import static temporaryE.Grid.CELLSIZE;
import static temporaryE.Grid.PADDING;

public class Squares {
    public int row;
    public int col;
    public boolean painted;
    public Rectangle rectangle;
    public Squares(int row, int col) {
        this.row = row;
        this.col = col;
        rectangle = new Rectangle(col * CELLSIZE + PADDING, row * CELLSIZE + PADDING, CELLSIZE, CELLSIZE);
        rectangle.draw();
    }
    public void paint(){
        painted = true;
        rectangle.fill();
    }
    public void erase(){
        painted = false;
        rectangle.draw();
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public boolean isPainted() {
        return painted;
    }

    @Override
    public String toString() {
        return painted ? "1" : "0";
    }
}
