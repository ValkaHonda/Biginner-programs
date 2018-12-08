package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that reads a rectangular matrix of size N x M and finds in it the square 3 x 3 that has
 * maximal sum of its elements. Print that sum.

 Input
 On the first line you will receive the numbers N and M separated by a single space
 On the next N lines there will be M numbers separated with spaces - the elements of the matrix
 Output
 Print the maximal sum of 3 x 3 square
 Constraints
 3 <= N, M <= 1024
 Numbers in the matrix will be in the interval [ -1000, 1000 ]
 */
public class MaxSumOf3x3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] inputLine = scanner.nextLine().split("[ ]+");
        int n = Integer.valueOf(inputLine[0]);
        int m = Integer.valueOf(inputLine[1]);

        int[][] matrix = new int[n][m];
        for (int i = 0; i < n; i++) {
            inputLine = scanner.nextLine().split("[ ]+");
            for (int j = 0; j < m; j++) {
                matrix[i][j] = Integer.valueOf(inputLine[j]);
            }
        }
        int maxSum = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (((i + 2) < n) && ((j + 2) < m)){
                    int currentSum = getSum(matrix,i,j);
                    if (maxSum < currentSum){
                        maxSum = currentSum;
                    }
                }
            }
        }
        System.out.println(maxSum);
        scanner.close();
    }
    private static int getSum(int[][] matrix, int x, int y){
        int sum = 0;
        for (int i = x; i < x+3; i++) {
            for (int j = y; j < y+3; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }
}
