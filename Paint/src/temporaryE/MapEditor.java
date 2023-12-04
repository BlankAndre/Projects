package temporaryE;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;


public class MapEditor {
    public  Grid grid;
    public PlayerSquare playerSquare;
    private static final String fileName = "resources/GridMap.txt";

    public MapEditor(int rows, int cols) {
        grid = new Grid(rows,cols);
        playerSquare = new PlayerSquare();
    }

    public void movement(PlayerSquare.Direction direction){
        //build the edge check here pls
        if (limitCheck(direction)) {
            System.out.println("Out of bounds");
            return;
        } else {
            switch (direction){
                case FORWARD -> playerSquare.moveFow();
                case LEFT -> playerSquare.moveLeft();
                case RIGHT -> playerSquare.moveRight();
                case BEHIND -> playerSquare.moveDown();

            }
        }

    }
    public void paintBlock() {
        Squares squares = grid.findSquare(playerSquare.getRow(),playerSquare.getCol());

        squares.paint();
    }

    public void cleanBlocks() {
        grid.cleanAll();
    }

    public void cleanBlock() {
        Squares squares = grid.findSquare(playerSquare.getRow(),playerSquare.getCol());

        squares.erase();
    }

    public void load() {

    }

    public void save() {
        try {
            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(fileName));
            bufferedWriter.write(grid.toString());
            bufferedWriter.close();
        } catch (IOException e) {
            System.out.println("Error :" + e.getMessage());
        }
        System.out.println("works in save");
    }
    public boolean limitCheck(PlayerSquare.Direction direction) {
        return direction == PlayerSquare.Direction.FORWARD && playerSquare.getRow() == 0 ||
                direction == PlayerSquare.Direction.RIGHT && playerSquare.getCol() == grid.getCols() - 1||
                direction == PlayerSquare.Direction.LEFT && playerSquare.getCol() == 0 ||
                direction == PlayerSquare.Direction.BEHIND && playerSquare.getRow() == grid.getRows() - 1;


    }
}
