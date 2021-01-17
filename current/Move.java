package current;

public class Move {
    private int x;
    private int y;

    public Move(int Mx, int My) {
        this.x = Mx;
        this.y = My;
    }

    public boolean maxMove(Move pMove) {
        return pMove.getX() >= 0 && pMove.getY() >= 0 && pMove.getX() <= this.x && pMove.getY() <= this.y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
