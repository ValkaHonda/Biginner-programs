package preparationForTelerik.firstPageProblems;

import java.util.Scanner;

/**
 * Write a program that finds and prints the biggest prime number which is <= N.

 Input
 On the first line you will receive the number N
 Output
 Print the biggest prime number which is <= N
 Constraints
 2 <= N <= 10 000 000
 Sample tests
 Input	Output
 13	13
 126	113
 26	23
 */
public class BiggestPrimeNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.valueOf(scanner.nextLine());
        int largestPrimeNumber = 2;
        for (int i = n; i >= 2; i--) {
            if(isPrime(i)){
                largestPrimeNumber = i;
                break;
            }
        }
        System.out.println(largestPrimeNumber);
        scanner.close();
    }
    private static boolean isPrime(int n){
        if (n <= 3)  return true;

        if (n%2 == 0 || n%3 == 0) return false;

        for (int i=5; i*i<=n; i=i+6)
            if (n%i == 0 || n%(i+2) == 0)
                return false;

        return true;
    }
}
