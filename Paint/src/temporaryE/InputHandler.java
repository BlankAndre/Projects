package temporaryE;

import org.academiadecodigo.simplegraphics.keyboard.Keyboard;
import org.academiadecodigo.simplegraphics.keyboard.KeyboardEvent;
import org.academiadecodigo.simplegraphics.keyboard.KeyboardEventType;
import org.academiadecodigo.simplegraphics.keyboard.KeyboardHandler;

public class InputHandler implements KeyboardHandler {
    private Keyboard keyboard;
    private MapEditor mapEditor;
    private Grid Grid;

    public InputHandler( MapEditor mapEditor) {
        this.mapEditor = mapEditor;

        addKeyBoardEvents();
    }

    @Override
    public void keyPressed(KeyboardEvent keyboardEvent) {
        int key = keyboardEvent.getKey();
//so trocar o movement pelo que chamares o metodo
        switch (key){
            case KeyboardEvent.KEY_UP:
                System.out.println("Tas a ir para cima");
                mapEditor.movement (PlayerSquare.Direction.FORWARD);
                break;
            case KeyboardEvent.KEY_DOWN:
                System.out.println("Tas a ir para baixo");
                mapEditor.movement (PlayerSquare.Direction.BEHIND);
                break;
            case KeyboardEvent.KEY_LEFT:
                System.out.println("Tas a ir para esquerda");
                mapEditor.movement (PlayerSquare.Direction.LEFT);
                break;
            case KeyboardEvent.KEY_RIGHT:
                System.out.println("Tas a ir para direita");
                mapEditor.movement (PlayerSquare.Direction.RIGHT);
                break;
            case KeyboardEvent.KEY_SPACE:
                System.out.println("Isto sera o pintar");
                mapEditor.paintBlock();
                break;
            case KeyboardEvent.KEY_SHIFT:
                System.out.println("Isto sera limpar individual");
                mapEditor.cleanBlock();
                break;
            case KeyboardEvent.KEY_0:
                System.out.println("Isto sera limpar tudo");
                mapEditor.cleanBlocks();
                break;
            case KeyboardEvent.KEY_L:
                System.out.println("Isto sera para fazer load");
                mapEditor.load();
                break;
            case KeyboardEvent.KEY_S:
                System.out.println("Isto sera para fazer save");
                mapEditor.save();
                break;
            //tb terei que dizer qual das saves por  isso terei que alterar isto
        }
    }

    @Override
    public void keyReleased(KeyboardEvent keyboardEvent) {

    }

    private void addKeyBoardEvents() {//adicionar os que falta
        this.keyboard = new Keyboard(this);

        addKeyboardEvent(KeyboardEvent.KEY_UP, KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_DOWN, KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_LEFT, KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_RIGHT, KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_SPACE,KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_SHIFT,KeyboardEventType.KEY_PRESSED);

        addKeyboardEvent(KeyboardEvent.KEY_0,KeyboardEventType.KEY_PRESSED);
    }
    private void addKeyboardEvent(int key, KeyboardEventType eventType){
        KeyboardEvent keyboardEvent = new KeyboardEvent();
        keyboardEvent.setKey(key);
        keyboardEvent.setKeyboardEventType(eventType);
        keyboard.addEventListener(keyboardEvent);
    }
}
