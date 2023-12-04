package temporaryE;

import org.academiadecodigo.simplegraphics.graphics.Color;

import static temporaryE.Grid.CELLSIZE;

public class PlayerSquare extends Squares {
    private Squares square;
    public Grid grid;
    public enum Direction {
        FORWARD,
        LEFT,
        RIGHT,
        BEHIND
    }

    public PlayerSquare() {
        super(0,0);
        rectangle.setColor(Color.BLUE);
        paint();
    }
    public void moveFow(){
        row--;
        rectangle.translate(0,-CELLSIZE);
    }
    public void moveLeft(){
        col--;
        rectangle.translate(-CELLSIZE,0);
    }
    public void moveRight(){
        col++;
        rectangle.translate(CELLSIZE,0);
    }
    public void moveDown(){
        row++;
        rectangle.translate(0,CELLSIZE);
    }

}
