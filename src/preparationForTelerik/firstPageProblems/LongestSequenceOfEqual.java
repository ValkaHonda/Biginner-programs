package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.

 Input
 On the first line you will receive the number N
 On the next N lines the numbers of the array will be given
 Output
 Print the length of the maximal sequence
 Constraints
 1 <= N <= 1024
 Sample tests
 Input	Output
 10
 2
 1
 1
 2
 3
 3
 2
 2
 2
 1	3
 */
public class LongestSequenceOfEqual {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.valueOf(scanner.nextLine());
        }
        System.out.println(getLongestSequenceOfEqualCount(arr));
        scanner.close();
    }
    private static int getLongestSequenceOfEqualCount(int[] arr){
        int maxLength = 1;
        int currentLength = 1;
        for (int i = 0; i < arr.length-1; i++) {
            if (arr[i] == arr[i+1]){
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
