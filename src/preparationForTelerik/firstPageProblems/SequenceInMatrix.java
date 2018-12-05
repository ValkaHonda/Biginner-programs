package preparationForTelerik.firstPageProblems;

import java.util.Arrays;
import java.util.Scanner;
/*
* We are given a matrix of strings of size N x M. Sequences in the matrix we define as sets of several neighbour elements located on the same line, column or diagonal. Write a program that finds the longest sequence of equal strings in the matrix and prints its length.

Input
On the first line you will receive the numbers N and M separated by a single space
On the next N lines there will be M strings separated with spaces - the strings in the matrix
Output
Print the length of the longest sequence of equal equal strings in the matrix
Constraints
3 <= N, M <= 128
Time limit: 0.1s
Memory limit: 16MB
Sample tests
Input
6 6
92 11 23 42 59 48
09 92 23 72 56 14
17 63 92 46 85 95
34 12 52 69 23 95
26 88 78 71 29 95
26 34 16 63 39 95

Output
4
*/

public class SequenceInMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] inputLine = scanner.nextLine().split("[ ]+");
        int n = Integer.valueOf(inputLine[0]);
        int m = Integer.valueOf(inputLine[1]);
        String[][] matrix = new String[n][m];
        for (int i = 0; i < n; i++) {
            inputLine = scanner.nextLine().split("[ ]+");
            for (int j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = inputLine[j];
            }
        }

        int maxSequenceLength = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                int currentSequenceLength = getSequenceLength(matrix,i,j);
                if (currentSequenceLength > maxSequenceLength){
                    maxSequenceLength = currentSequenceLength;
                }
            }
        }
        System.out.println(maxSequenceLength);
        scanner.close();
    }

    private static int getSequenceLength(String[][] matrix, int x, int y){
        int counter = 1;
        int currentCounter = 0;
        String element = matrix[x][y];
        int n = matrix.length;
        int m = matrix[0].length;

        /// right
        for (int i = y; i < m; i++) {
            if (matrix[x][i].equals(element)){
                currentCounter++;
            }
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        /// left
        for (int i = y; i >= 0; i--) {
            if (matrix[x][i].equals(element)){
                currentCounter++;
            }
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // up
        for (int i = x; i >= 0; i--) {
            if (matrix[i][y].equals(element)){
                currentCounter++;
            }
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // down
        for (int i = x; i < n; i++) {
            if (matrix[i][y].equals(element)){
                currentCounter++;
            }
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // up-down
        int xx = x;
        int yy = y;
        while ((xx < n) & (yy < m)){
            if (matrix[xx][yy].equals(element)){
                currentCounter++;
            }
            xx++;
            yy++;
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // up-down
        xx = x;
        yy = y;
        while ((xx >= 0 ) & (yy >= 0)){
            if (matrix[xx][yy].equals(element)){
                currentCounter++;
            }
            xx--;
            yy--;
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // up-down
        xx = x;
        yy = y;
        while ((xx >= 0 ) & (yy < m)){
            if (matrix[xx][yy].equals(element)){
                currentCounter++;
            }
            xx--;
            yy++;
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }

        currentCounter = 0;
        // up-down
        xx = x;
        yy = y;
        while ((xx < n) & (yy >= 0)){
            if (matrix[xx][yy].equals(element)){
                currentCounter++;
            }
            xx++;
            yy--;
        }
        if (currentCounter > counter){
            counter = currentCounter;
        }


        return counter;
    }
}
