package preparationForTelerik.firstPageProblems;

import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Scanner;

/**
*   Write a program that finds the largest area of equal neighbour elements in a rectangular matrix and prints its size.

 Input
 On the first line you will receive the numbers N and M separated by a single space
 On the next N lines there will be M numbers separated with spaces - the elements of the matrix
 Output
 Print the size of the largest area of equal neighbour elements
 Constraints
 3 <= N, M <= 1024
 Time limit: 0.35s
 Memory limit: 24MB
 Sample tests
 Input	Output
 5 6
 1 3 2 2 2 4
 3 3 3 2 4 4
 4 3 1 2 3 3
 4 3 1 3 3 1
 4 3 3 3 1 1
 */
public class LargesAreaInMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] inputLineNumbers = scanner.nextLine().split("[ ]+");
        int n = Integer.valueOf(inputLineNumbers[0]);
        int m = Integer.valueOf(inputLineNumbers[1]);
        int[][] matrix = new int[n][m];
        for (int i = 0; i < n; i++) {
            inputLineNumbers = scanner.nextLine().split("[ ]+");
            for (int j = 0; j < inputLineNumbers.length; j++) {
                matrix[i][j] = Integer.valueOf(inputLineNumbers[j]);
            }
        }












        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
        scanner.close();
    }
}
class Graph
{
    private int V;   // No. of vertices

    // Array  of lists for Adjacency List Representation
    private LinkedList<Integer> adj[];

    // Constructor
    Graph(int v)
    {
        V = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }

    //Function to add an edge into the graph
    void addEdge(int v, int w)
    {
        adj[v].add(w);  // Add w to v's list.
    }

    // A function used by DFS
    void DFSUtil(int v,boolean visited[])
    {
        // Mark the current node as visited and print it
        visited[v] = true;
        System.out.print(v+" ");

        // Recur for all the vertices adjacent to this vertex
        Iterator<Integer> i = adj[v].listIterator();
        while (i.hasNext())
        {
            int n = i.next();
            if (!visited[n])
                DFSUtil(n, visited);
        }
    }

    // The function to do DFS traversal. It uses recursive DFSUtil()
    void DFS(int v)
    {
        // Mark all the vertices as not visited(set as
        // false by default in java)
        boolean visited[] = new boolean[V];

        // Call the recursive helper function to print DFS traversal
        DFSUtil(v, visited);
    }

    public static void main(String args[])
    {
        Graph g = new Graph(4);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Following is Depth First Traversal "+
                "(starting from vertex 2)");

        g.DFS(2);
    }
}
