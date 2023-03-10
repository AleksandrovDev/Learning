public class Main {

    public static void main(String[] args) {
        Secret[] array = Secret.values();
        int count = 0;
        for (Secret i : array) {

            String check = String.valueOf(i);
            if (check.charAt(0) == 'S' && check.charAt(1) == 'T' && check.charAt(2) == 'A' && check.charAt(3) == 'R') {
                count++;
            }
        }
        System.out.println(count);
    }
}

//At least two constants start with STAR
//enum Secret {
// STAR, CRASH, START, // ...
//}
