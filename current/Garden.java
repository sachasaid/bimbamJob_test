package current;

public class Garden {
    private int position;
    private char orientation;

    public Garden(int position, char orientation) {
        this.position = position;
        this.orientation = orientation;

        System.out.println("la tondeuse se trouve en " + position + orientation);
    }

    public char getOrientation() {
        return orientation;
    }

    public int getPosition() {
        return position;
    }
}
