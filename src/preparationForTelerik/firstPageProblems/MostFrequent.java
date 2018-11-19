package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that finds the most frequent number in an array of N elements.

 Input
 On the first line you will receive the number N
 On the next N lines the numbers of the array will be given
 Output
 Print the most frequent number and how many time it is repeated
 Output should be REPEATING_NUMBER (REPEATED_TIMES times)
 Constraints
 1 <= N <= 1024
 0 <= each number in the array <= 10000
 There will be only one most frequent number
 Sample tests
 Input	Output
 13
 4
 1
 1
 4
 2
 3
 4
 4
 1
 2
 4
 9
 3	4 (5 times)
 */
public class MostFrequent {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.valueOf(scanner.nextLine());
        }


        scanner.close();
    }

}
