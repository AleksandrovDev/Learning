class Main {
    public static void main(String[] args) {
        Interface window = new Interface();
        window.window();
        Robot robot = new Robot(1, 1, Direction.UP);
        System.out.println(robot.getDirection());
        System.out.println(robot.getX());
        System.out.println(robot.getY());
        System.out.println();
        Move movew = new Move();
        movew.moveRobot(robot, 1, -10);
        System.out.println(robot.getDirection());
        System.out.println(robot.getX());
        System.out.println(robot.getY());

    }
}


class Move {
    public static void moveRobot(Robot robot, int toX, int toY) {

        while (toX != robot.getX()) {

            if (toX > robot.getX()) {   // we need to move RIGHT

                while (robot.getDirection() != Direction.RIGHT) {
                    robot.turnLeft();
                }
                robot.stepForward();


            }
            if (toX < robot.getX()) {   // we need to move LEFT
                while (robot.getDirection() != Direction.LEFT) {
                    robot.turnLeft();
                }
                robot.stepForward();
            }
            if (toX == robot.getX()){
                break;
            }
        }
        while (toY != robot.getY()) {


            if (toY-1 < robot.getY()) {   // we need to move DOWN
                while (robot.getDirection()!= Direction.DOWN){
                    robot.turnLeft();
                }
                robot.stepForward();
            }

            if (toY > robot.getY()) {   // we need to move UP
                while (robot.getDirection()!= Direction.UP){
                    robot.turnLeft();
                }
                robot.stepForward();
            }
            if (toY == robot.getY()){

                break;
            }
        }




    }


}

//Don't change code below

enum Direction {
    UP(0, 1),
    DOWN(0, -1),
    LEFT(-1, 0),
    RIGHT(1, 0);

    private final int dx;
    private final int dy;

    Direction(int dx, int dy) {
        this.dx = dx;
        this.dy = dy;
    }

    public Direction turnLeft() {
        switch (this) {
            case UP:
                return LEFT;
            case DOWN:
                return RIGHT;
            case LEFT:
                return DOWN;
            case RIGHT:
                return UP;
            default:
                throw new IllegalStateException();
        }
    }

    public Direction turnRight() {
        switch (this) {
            case UP:
                return RIGHT;
            case DOWN:
                return LEFT;
            case LEFT:
                return UP;
            case RIGHT:
                return DOWN;
            default:
                throw new IllegalStateException();
        }
    }

    public int dx() {
        return dx;
    }

    public int dy() {
        return dy;
    }
}

class Robot {
    private int x;
    private int y;
    private Direction direction;

    public Robot(int x, int y, Direction direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public void turnLeft() {
        direction = direction.turnLeft();
    }

    public void turnRight() {
        direction = direction.turnRight();
    }

    public void stepForward() {
        x += direction.dx();
        y += direction.dy();
    }

    public Direction getDirection() {
        return direction;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}