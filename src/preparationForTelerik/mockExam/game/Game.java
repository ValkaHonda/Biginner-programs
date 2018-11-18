package preparationForTelerik.mockExam.game;

import java.util.Scanner;

/**
 * Three friends came up with a game for having fun in the break between the classes. One of them says a three-digit number and the others use it to form a mathematical expressions by using operators for sum and multiplication between the digits of that number.

 The winner is the first one who founds the biggest number that is a result of the above mentioned rules.

 Write a program 'game', which prints out that biggest number.

 Input
 Read from the standard input

 The first line of the input will be positive three-digit number N.
 Output
 Print on the standard output

 The result should be the calculated biggest number.
 *
 */
public class Game {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = Integer.parseInt(scanner.nextLine());
        //N -> 185
        //N -> 111

        int a = N % 10;
        N /= 10;

        int b = N % 10;

        N /= 10;

        int c = N;
        // c b a

        // c + b + a
        // c * b * a
        // c + b * a
        // c * b + a

        int arr[] = new int[4];
        arr[0] = c + b + a;
        arr[1] = c * b * a;
        arr[2] = c + b * a;
        arr[3] = c * b + a;

        int maxValue = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue){
                maxValue = arr[i];
            }
        }

        if (c != 0){
            System.out.println(maxValue);
        }

        scanner.close();
    }
}
