package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that finds the maximal sum of consecutive elements in a given array of N numbers.

 _Can you do it with only one loop (with single scan through the elements of the array)?_
 Input
 On the first line you will receive the number N
 On the next N lines the numbers of the array will be given
 Output
 Print the maximal sum of consecutive numbers
 Constraints
 1 <= N <= 1024
 Sample tests
 Input	Output
 10
 2
 3
 -6
 -1
 2
 -1
 6
 4
 -8
 8
 */
public class MaxSumOfSubsequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.valueOf(scanner.nextLine());
        }
        int maxSum = arr[0];
        for (int i = 0; i < n; i++) {
            int currentElementMaxSum = getElementMaxSum(arr,i);
            if (currentElementMaxSum > maxSum){
                maxSum = currentElementMaxSum;
            }
        }
        if (arr[arr.length-1] > maxSum){
            System.out.println(arr[arr.length-1]);
        } else{
            System.out.println(maxSum);
        }

        scanner.close();
    }
    private static int getElementMaxSum(int[] arr, int startIndex){
        int endIndex = startIndex+1;
        int sum = 0;
        while (endIndex <= arr.length){
            int currentSum = getElementsSumFromIndexToIndex(arr,startIndex,endIndex);
            if (currentSum > sum){
                sum = currentSum;
            }
            endIndex++;
        }
        return sum;
    }
    private static int getElementsSumFromIndexToIndex(int[] arr, int start, int end){
        int sum = 0;
        for (int i = start; i < end; i++) {
            sum+=arr[i];
        }
        return sum;
    }
}
