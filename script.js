// -------------------------------------------------------------------------------------------------
// This file powers the “click-to-show-definition-and-example” behavior.
// It also injects simplified, beginner-friendly Java examples.
// -------------------------------------------------------------------------------------------------

// A small set of easy-to-read code snippets for each subtopic:
const javaExamples = {
  // 1. Java Basics
  "jb-syntax-variables":
    `// Java Syntax & Variables Example
int number = 10;
String name = "Alice";
System.out.println("Number: " + number + ", Name: " + name);`,
  "jb-data-types":
    `// Java Data Types Example
int age = 25;
double price = 19.99;
char grade = 'A';
boolean isActive = true;`,
  "jb-loops-conditionals":
    `// Java Loops & Conditionals
for (int i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    System.out.println(i + " is even");
  } else {
    System.out.println(i + " is odd");
  }
}`,
  "jb-methods-scope":
    `// Java Methods & Scope
static void greet(String name) {
  System.out.println("Hello, " + name);
}
greet("Bob");`,

  // 2. OOP
  "oop-classes-objects":
    `// Java Class & Object
class Dog {
  String name;
  void bark() { System.out.println(name + " barks!"); }
}
Dog d = new Dog();
d.name = "Max";
d.bark();`,
  "oop-inheritance":
    `// Java Inheritance
class Animal { void eat() { System.out.println("eating"); } }
class Dog extends Animal { }
Dog d = new Dog();
d.eat();`,
  "oop-polymorphism":
    `// Java Polymorphism
class Animal { void sound() { System.out.println("Animal sound"); } }
class Cat extends Animal { void sound() { System.out.println("Meow"); } }
Animal a = new Cat();
a.sound();`,
  "oop-abstraction-interfaces":
    `// Java Interface
interface Drawable { void draw(); }
class Circle implements Drawable {
  public void draw() { System.out.println("Drawing a circle"); }
}
Drawable obj = new Circle();
obj.draw();`,

  // 3. Arrays
  "arr-declaration-initialization":
    `// Array Declaration & Initialization
int[] arr = {1, 2, 3, 4};`,
  "arr-iteration-updates":
    `// Array Iteration & Update
for (int i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2;
}`,
  "arr-sorting-techniques":
    `// Sorting an Array
Arrays.sort(arr);`,
  "arr-two-pointer-method":
    `// Two Pointer Technique
int left = 0, right = arr.length - 1;
while (left < right) {
  // Compare or swap arr[left] & arr[right]
  left++; right--;
}`,

  // 4. Strings
  "str-stringbuilder-usage":
    `// Using StringBuilder
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());`,
  "str-palindromes":
    `// Palindrome Check
String s = "level";
boolean isPalindrome = s.equals(new StringBuilder(s).reverse().toString());`,
  "str-substrings-patterns":
    `// Substring Example
String s = "abcdef";
String sub = s.substring(1, 4); // "bcd"`,
  "str-character-frequency":
    `// Character Frequency
int[] freq = new int[26];
for (char c : s.toCharArray()) {
  freq[c - 'a']++;
}`,

  // 5. Recursion
  "rec-base-recursive-case":
    `// Factorial with Recursion
int fact(int n) {
  if (n == 0) return 1;  // Base case
  return n * fact(n - 1); // Recursive case
}`,
  "rec-backtracking-basics":
    `// Simple Backtracking (generate subsets)
void backtrack(int idx, List<Integer> curr) {
  if (idx == nums.length) {
    System.out.println(curr);
    return;
  }
  // Exclude
  backtrack(idx + 1, curr);
  // Include
  curr.add(nums[idx]);
  backtrack(idx + 1, curr);
  curr.remove(curr.size() - 1);
}`,
  "rec-recursion-tree":
    `// Visualize fibonacci calls (small example)
int fib(int n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}`,
  "rec-memoization-concept":
    `// Fibonacci with Memoization
Map<Integer, Integer> memo = new HashMap<>();
int fib(int n) {
  if (n <= 1) return n;
  if (memo.containsKey(n)) return memo.get(n);
  int res = fib(n - 1) + fib(n - 2);
  memo.put(n, res);
  return res;
}`,

  // 6. Sorting Algorithms
  "sort-bubble-sort":
    `// Bubble Sort
for (int i = 0; i < arr.length - 1; i++) {
  for (int j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      int temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}`,
  "sort-selection-sort":
    `// Selection Sort
for (int i = 0; i < arr.length - 1; i++) {
  int minIndex = i;
  for (int j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  int temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}`,
  "sort-merge-sort":
    `// Merge Sort (outline)
void mergeSort(int[] arr, int left, int right) {
  if (left < right) {
    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    // Merge logic goes here...
  }
}`,
  "sort-quick-sort":
    `// Quick Sort (outline)
void quickSort(int[] arr, int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`,

  // 7. Searching Algorithms
  "search-linear-search":
    `// Linear Search
for (int i = 0; i < arr.length; i++) {
  if (arr[i] == key) return i;
}
return -1;`,
  "search-binary-search":
    `// Binary Search (array must be sorted)
int left = 0, right = arr.length - 1;
while (left <= right) {
  int mid = (left + right) / 2;
  if (arr[mid] == key) return mid;
  else if (arr[mid] < key) left = mid + 1;
  else right = mid - 1;
}
return -1;`,
  "search-search-in-matrix":
    `// Search in 2D Matrix (brute force)
for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] == key) return true;
  }
}
return false;`,
  "search-search-variants":
    `// Search variations: first/last occurrence, kth smallest, etc.`,

  // 8. Linked List
  "ll-singly-doubly":
    `// Singly vs Doubly Linked List Node
class Node {
  int val;
  Node next;       // singly
  Node prev, next; // doubly
}`,
  "ll-insertion-deletion":
    `// Insert at head (singly)
Node newNode = new Node(val);
newNode.next = head;
head = newNode;

// Delete a node
if (head.val == key) head = head.next;`,
  "ll-reversing-list":
    `// Reverse a Singly Linked List
Node prev = null, curr = head;
while (curr != null) {
  Node nextNode = curr.next;
  curr.next = prev;
  prev = curr;
  curr = nextNode;
}
head = prev;`,
  "ll-detect-cycle":
    `// Detect Cycle (Floyd’s Tortoise & Hare)
Node slow = head, fast = head;
while (fast != null && fast.next != null) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow == fast) return true;
}
return false;`,

  // 9. Stacks
  "stacks-array":
    `// Stack with Array
int[] stack = new int[100];
int top = -1;
void push(int x) { stack[++top] = x; }
int pop() { return stack[top--]; }`,
  "stacks-linkedlist":
    `// Stack with LinkedList
class Node { int val; Node next; }
Node top = null;
void push(int x) {
  Node node = new Node();
  node.val = x;
  node.next = top;
  top = node;
}
int pop() {
  int ret = top.val;
  top = top.next;
  return ret;
}`, 
  "stacks-next-greater-element":
    `// Next Greater Element (array)
Stack<Integer> st = new Stack<>();
int[] res = new int[arr.length];
for (int i = arr.length - 1; i >= 0; i--) {
  while (!st.isEmpty() && st.peek() <= arr[i]) {
    st.pop();
  }
  res[i] = (st.isEmpty() ? -1 : st.peek());
  st.push(arr[i]);
}`,
  "stacks-balanced-parentheses":
    `// Check Balanced Parentheses
Stack<Character> st = new Stack<>();
for (char c : s.toCharArray()) {
  if (c == '(') st.push(c);
  else if (c == ')' && !st.isEmpty()) st.pop();
}
return st.isEmpty();`,

  // 10. Queues
  "queues-array":
    `// Queue with Array
int[] queue = new int[100];
int front = 0, rear = 0;
void enqueue(int x) { queue[rear++] = x; }
int dequeue() { return queue[front++]; }`,
  "queues-circular-queue":
    `// Circular Queue
int[] q = new int[5];
int front = 0, rear = 0;
void enqueue(int x) {
  rear = (rear + 1) % q.length;
  q[rear] = x;
}
int dequeue() {
  front = (front + 1) % q.length;
  return q[front];
}`, 
  "queues-deque-operations":
    `// Deque Operations
Deque<Integer> dq = new ArrayDeque<>();
dq.addFirst(10);
dq.addLast(20);
dq.removeFirst();`,
  "queues-priority-queue":
    `// Priority Queue
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.add(5);
pq.add(1);
int top = pq.poll(); // 1`,

  // 11. Hashing
  "hash-hashmap-basics":
    `// HashMap Basics
Map<String, Integer> map = new HashMap<>();
map.put("apple", 3);
int count = map.get("apple");`,
  "hash-frequency-count":
    `// Frequency Count
Map<Integer, Integer> freq = new HashMap<>();
for (int x : arr) {
  freq.put(x, freq.getOrDefault(x, 0) + 1);
}`,
  "hash-two-sum-problem":
    `// Two Sum
Map<Integer, Integer> map = new HashMap<>();
for (int x : arr) {
  if (map.containsKey(target - x)) {
    return new int[]{map.get(target - x), i};
  }
  map.put(x, i);
}`,
  "hash-anagram-groups":
    `// Group Anagrams
Map<String, List<String>> groups = new HashMap<>();
for (String s : strs) {
  char[] arr = s.toCharArray();
  Arrays.sort(arr);
  String key = new String(arr);
  groups.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
}`,

  // 12. Trees
  "tree-binary-tree-basics":
    `// Binary Tree Node
class TreeNode {
  int val;
  TreeNode left, right;
  TreeNode(int v) { val = v; }
}`,
  "tree-traversals":
    `// Preorder DFS
void dfs(TreeNode root) {
  if (root == null) return;
  System.out.println(root.val);
  dfs(root.left);
  dfs(root.right);
}`,
  "tree-bst":
    `// Insert into BST
TreeNode insert(TreeNode root, int v) {
  if (root == null) return new TreeNode(v);
  if (v < root.val) root.left = insert(root.left, v);
  else root.right = insert(root.right, v);
  return root;
}`,
  "tree-lowest-common-ancestor":
    `// LCA in BST
TreeNode lca(TreeNode root, int p, int q) {
  if (root.val > p && root.val > q) return lca(root.left, p, q);
  if (root.val < p && root.val < q) return lca(root.right, p, q);
  return root;
}`,

  // 13. Heaps
  "heap-min-heap":
    `// Min-Heap with PriorityQueue
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.add(3);
minHeap.add(1);
int smallest = minHeap.poll(); // 1`,
  "heap-max-heap":
    `// Max-Heap with PriorityQueue
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.add(3);
maxHeap.add(1);
int largest = maxHeap.poll(); // 3`,
  "heap-heap-sort":
    `// Heap Sort Outline
PriorityQueue<Integer> pq = new PriorityQueue<>();
for (int x : arr) pq.add(x);
while (!pq.isEmpty()) {
  System.out.print(pq.poll() + " ");
}`,
  "heap-top-k-elements":
    `// Top K Elements
PriorityQueue<Integer> pq = new PriorityQueue<>();
for (int x : arr) {
  pq.add(x);
  if (pq.size() > k) pq.poll();
}`,

  // 14. Graphs
  "graph-adjacency-list-matrix":
    `// Adjacency List
List<List<Integer>> adj = new ArrayList<>();
for (int i = 0; i < n; i++) {
  adj.add(new ArrayList<>());
}
adj.get(0).add(1); // edge 0→1`,
  "graph-dfs-bfs":
    `// DFS Example
void dfs(int v, boolean[] visited) {
  visited[v] = true;
  for (int nxt : adj.get(v)) {
    if (!visited[nxt]) dfs(nxt, visited);
  }
}`,
  "graph-dijkstra":
    `// Dijkstra’s Algorithm Outline
PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
int[] dist = new int[n];
Arrays.fill(dist, Integer.MAX_VALUE);
dist[src] = 0;
pq.add(new int[]{src, 0});
// while pq not empty: relax neighbors...`,
  "graph-topological-sort":
    `// Topological Sort (Kahn’s)
int[] indegree = new int[n];
// compute indegree, then:
Queue<Integer> q = new LinkedList<>();
for (int i = 0; i < n; i++) {
  if (indegree[i] == 0) q.add(i);
}
while (!q.isEmpty()) {
  int u = q.poll();
  topoOrder.add(u);
  for (int v : adj.get(u)) {
    indegree[v]--;
    if (indegree[v] == 0) q.add(v);
  }
}`,

  // 15. Dynamic Programming
  "dp-1d-problems":
    `// 1D DP Example: Fibonacci
int[] dp = new int[n + 1];
dp[0] = 0;
dp[1] = 1;
for (int i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}`,
  "dp-2d-problems":
    `// 2D DP Example: Unique Paths
int m = 3, n = 3;
int[][] dp = new int[m][n];
for (int i = 0; i < m; i++) dp[i][0] = 1;
for (int j = 0; j < n; j++) dp[0][j] = 1;
for (int i = 1; i < m; i++) {
  for (int j = 1; j < n; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  }
}`,
  "dp-memoization-vs-tabulation":
    `// Memo vs Tab
// Memo: Top-down recursion + cache.
// Tab: bottom-up loops filling an array.`,
  "dp-longest-subsequence":
    `// Longest Increasing Subsequence (n^2 DP)
int[] dp = new int[n];
Arrays.fill(dp, 1);
int maxLen = 1;
for (int i = 1; i < n; i++) {
  for (int j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
      maxLen = Math.max(maxLen, dp[i]);
    }
  }
}`,

  // 16. Greedy Algorithms
  "greedy-activity-selection":
    `// Activity Selection
Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
int count = 1;
int lastFinish = intervals[0][1];
for (int i = 1; i < intervals.length; i++) {
  if (intervals[i][0] > lastFinish) {
    count++;
    lastFinish = intervals[i][1];
  }
}`,
  "greedy-huffman-encoding":
    `// Huffman Encoding Outline
PriorityQueue<Node> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a.freq));
for (char c : chars) pq.add(new Node(c, freq[c]));
while (pq.size() > 1) {
  Node x = pq.poll();
  Node y = pq.poll();
  Node combined = new Node('\\0', x.freq + y.freq, x, y);
  pq.add(combined);
}`,
  "greedy-fractional-knapsack":
    `// Fractional Knapsack
Arrays.sort(items, (a, b) -> Double.compare(b.valuePerWeight, a.valuePerWeight));
double totalVal = 0;
for (Item it : items) {
  if (capacity == 0) break;
  int take = Math.min(it.weight, capacity);
  totalVal += take * it.valuePerWeight;
  capacity -= take;
}`,
  "greedy-job-scheduling":
    `// Job Scheduling (profit-based)
Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
boolean[] slot = new boolean[maxDeadline + 1];
int totalProfit = 0;
for (Job job : jobs) {
  for (int d = job.deadline; d > 0; d--) {
    if (!slot[d]) {
      slot[d] = true;
      totalProfit += job.profit;
      break;
    }
  }
}`,

  // 17. Sliding Window
  "sw-fixed-window":
    `// Fixed Window (maximum sum of size k)
int windowSum = 0;
for (int i = 0; i < k; i++) windowSum += arr[i];
int maxSum = windowSum;
for (int i = k; i < n; i++) {
  windowSum += arr[i] - arr[i - k];
  maxSum = Math.max(maxSum, windowSum);
}`,
  "sw-variable-window":
    `// Variable Window (longest subarray ≤ sum)
int left = 0, sum = 0, maxLen = 0;
for (int right = 0; right < n; right++) {
  sum += arr[right];
  while (sum > target) {
    sum -= arr[left++];
  }
  maxLen = Math.max(maxLen, right - left + 1);
}`,
  "sw-max-min-window":
    `// Max/Min in Window
Deque<Integer> dq = new ArrayDeque<>();
for (int i = 0; i < n; i++) {
  while (!dq.isEmpty() && arr[dq.peekLast()] <= arr[i]) {
    dq.pollLast();
  }
  dq.offerLast(i);
  if (dq.peekFirst() <= i - k) dq.pollFirst();
  if (i >= k - 1) result[i - k + 1] = arr[dq.peekFirst()];
}`,
  "sw-longest-substring":
    `// Longest Substring Without Repeat
Map<Character, Integer> map = new HashMap<>();
int left = 0, maxLen = 0;
for (int right = 0; right < s.length(); right++) {
  if (map.containsKey(s.charAt(right))) {
    left = Math.max(left, map.get(s.charAt(right)) + 1);
  }
  map.put(s.charAt(right), right);
  maxLen = Math.max(maxLen, right - left + 1);
}`,

  // 18. Bit Manipulation
  "bit-and-or-xor":
    `// AND, OR, XOR
int a = 5 & 3; // 1
int b = 5 | 3; // 7
int c = 5 ^ 3; // 6`,
  "bit-shifts":
    `// Bit Shifts
int x = 8 << 1; // 16
int y = 8 >> 1; // 4`,
  "bit-power-of-two":
    `// Check Power of Two
boolean isPow2 = (n > 0) && ((n & (n - 1)) == 0);`,
  "bit-counting-set-bits":
    `// Count Set Bits
int count = Integer.bitCount(n); // built-in method`,

  // 19. Trie
  "trie-construction":
    `// Trie Node
class TrieNode {
  TrieNode[] children = new TrieNode[26];
  boolean isEndOfWord;
}`,
  "trie-word-search":
    `// Word Search in Trie
TrieNode node = root;
for (char c : word.toCharArray()) {
  if (node.children[c - 'a'] == null) {
    return false;
  }
  node = node.children[c - 'a'];
}
return node.isEndOfWord;`,
  "trie-prefix-matching":
    `// Prefix Matching
TrieNode node = root;
for (char c : prefix.toCharArray()) {
  if (node.children[c - 'a'] == null) {
    return false;
  }
  node = node.children[c - 'a'];
}
return true;`,
  "trie-autocomplete-system":
    `// Autocomplete (collect words from a prefix node)
List<String> results = new ArrayList<>();
void dfs(TrieNode node, String path) {
  if (node.isEndOfWord) results.add(path);
  for (int i = 0; i < 26; i++) {
    if (node.children[i] != null) {
      dfs(node.children[i], path + (char) (i + 'a'));
    }
  }
}`
  ,

  // 20. Backtracking
  "bt-n-queens":
    `// N-Queens Problem
void solve(int row) {
  if (row == n) {
    printBoard();
    return;
  }
  for (int col = 0; col < n; col++) {
    if (isSafe(row, col)) {
      board[row][col] = 'Q';
      solve(row + 1);
      board[row][col] = '.'; // backtrack
    }
  }
}`,
  "bt-sudoku-solver":
    `// Sudoku Solver
boolean solve(char[][] board) {
  for (int r = 0; r < 9; r++) {
    for (int c = 0; c < 9; c++) {
      if (board[r][c] == '.') {
        for (char d = '1'; d <= '9'; d++) {
          if (isValid(board, r, c, d)) {
            board[r][c] = d;
            if (solve(board)) return true;
            board[r][c] = '.'; // backtrack
          }
        }
        return false; // no valid digit
      }
    }
  }
  return true; // solved
}`,
  "bt-subsets-permutations":
    `// Subsets & Permutations
void generateSubsets(int idx, List<Integer> curr) {
  System.out.println(curr);
  for (int i = idx; i < nums.length; i++) {
    curr.add(nums[i]);
    generateSubsets(i + 1, curr);
    curr.remove(curr.size() - 1);
  }
}
void generatePermutations(List<Integer> curr, boolean[] used) {
  if (curr.size() == nums.length) {
    System.out.println(curr);
    return;
  }
  for (int i = 0; i < nums.length; i++) {
    if (!used[i]) {
      used[i] = true;
      curr.add(nums[i]);
      generatePermutations(curr, used);
      curr.remove(curr.size() - 1);
      used[i] = false;
    }
  }
}`,
  "bt-word-search-grid":
    `// Word Search in 2D Grid
boolean exist(char[][] board, String word) {
  for (int r = 0; r < board.length; r++) {
    for (int c = 0; c < board[0].length; c++) {
      if (dfs(r, c, 0, word, board)) return true;
    }
  }
  return false;
}
boolean dfs(int r, int c, int idx, String word, char[][] board) {
  if (idx == word.length()) return true;
  if (r < 0 || r >= board.length || c < 0 || c >= board[0].length 
      || board[r][c] != word.charAt(idx)) return false;
  char temp = board[r][c];
  board[r][c] = '#'; // mark visited
  boolean found = dfs(r + 1, c, idx + 1, word, board)
               || dfs(r - 1, c, idx + 1, word, board)
               || dfs(r, c + 1, idx + 1, word, board)
               || dfs(r, c - 1, idx + 1, word, board);
  board[r][c] = temp; // backtrack
  return found;
}`
};

// For each roadmap box section, watch for checkbox clicks
document.querySelectorAll('.roadmap-box').forEach(section => {
  const exampleBox = section.querySelector('.example-box');
  if (!exampleBox) return;

  section.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', function() {
      // Uncheck all other checkboxes in this same section (only one example at a time)
      section.querySelectorAll('input[type="checkbox"]').forEach(other => {
        if (other !== cb) other.checked = false;
      });

      if (cb.checked) {
        // Show definition + example
        const defText = cb.getAttribute('data-definition') || '';
        const snippet = javaExamples[cb.id] || '// No example available.';
        exampleBox.style.display = 'block';
        exampleBox.innerHTML = `<div class="definition">${defText}</div><pre>${snippet}</pre>`;
      } else {
        // Hide when unchecked
        exampleBox.style.display = 'none';
        exampleBox.innerHTML = '';
      }
    });
  });
});
