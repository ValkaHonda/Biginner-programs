package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that finds the length of the maximal increasing sequence in an array of N integers.

 Input
 Read from the standard input

 On the first line you will receive the number N
 On the next N lines the numbers of the array will be given
 Output
 Print to the standard output

 Print the length of the maximal increasing sequence
 Constraints
 1 <= N <= 1024
 Time limit: 0.1s
 Memory limit: 16MB
 Sample tests
 Input
 8
 7
 3
 2
 3
 5
 2
 2
 4
 Output
 3
 */
public class LongestIncreasingSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.valueOf(scanner.nextLine());
        }
        System.out.println(getLongestSequenceIncreasing(arr));
        scanner.close();
    }
    private static int getLongestSequenceIncreasing(int[] arr){
        int maxLength = 1;
        int currentLength = 1;
        for (int i = 0; i < arr.length-1; i++) {
            if (arr[i] < arr[i+1]){
                currentLength++;
                if(currentLength > maxLength){
                    maxLength = currentLength;
                }
            } else {
                currentLength = 1;
            }
        }
        return maxLength;
    }
}
