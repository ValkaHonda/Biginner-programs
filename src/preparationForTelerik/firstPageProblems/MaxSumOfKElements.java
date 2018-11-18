package preparationForTelerik.firstPageProblems;

import java.util.Arrays;
import java.util.Scanner;

/**
 * Write a program that reads two integer numbers N and K and an array of N elements from the console. Find the maximal sum of K elements in the array.

 Input
 On the first line you will receive the number N
 On the second line you will receive the number K
 On the next N lines the numbers of the array will be given
 Output
 Print the maximal sum of K elements in the array
 Constraints
 1 <= N <= 1024
 1 <= K <= N
 Sample tests
 Input	Output
 8
 3
 3
 2
 3
 -2
 5
 4
 2
 7	1
 */
public class MaxSumOfKElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int k = Integer.valueOf(scanner.nextLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.valueOf(scanner.nextLine());
        }
        Arrays.sort(arr);
        int maxSum = 0;
        for(int i = n-1; i > (n-1-k); i--){
            maxSum += arr[i];
        }

        System.out.println(maxSum);
        scanner.close();
    }
}
