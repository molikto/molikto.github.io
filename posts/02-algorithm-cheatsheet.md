---
title: Algorithm Cheatsheet
---

mostly based on [Sedgewick book](http://algs4.cs.princeton.edu/cheatsheet/)

---------
* **numbers**
    * integer add, multi, division, module
    * **gcd** using **Euclid rule** $gcd(a, b) = gcd(a \text{ mod } b, b)$

---------
* **linear structures**
	* store elements with *external* order
	* most space is `n`
	* **array**
		* access `1`
		* search, insert, delete `n`
	* **linked list**
		* **functional**
			* functional linked list allows structural sharing, they are actually trees where child points parent
			* cannot do insert, delete
		* **singly linked**
		* **doubly linked**
			* last `1`
			* can be used to implement deque
		* head `1`, access, search `n`
		* insert, delete `1`
	* **sorting**, [animations](https://www.toptal.com/developers/sorting-algorithms)
	    * general data
		    * if the content of the linear structure has internal order, it can be sorted, and thus became a symbol table
		    * except for mergesort, all others can be made **in-place**
		    * **selection** select the ith element forall n, swap (not stable) ith element with it. `1/2 * n^2`
		    * **insertion** insert ith element into prefix, stable. best `n`, worst `1/2 * n^2`
		    * **bubble** pop small element on the way, to ith for all n, is stable. same as insertion
		    * **shellsort** (TODO)
		    * **mergesort** sort left, then sort right, then merge, stable. `n * lg n`
		        * **swap count problem**
		    * **quicksort** select a pivot, move it to top (not stable), then move all element smaller before it, then sort two sub array. average `n * lg n`, worst `1/2 * n^2`
		        * also can implement **quickselect**
		    * **heapsort** in place, not stable, best `n`, worst `2 * n * lg n` (TODO)
	    * **counting sort** for bounded finite domain, `n`
	    * **string sort** with small alphabet (TODO)
	* **string substring** algorithms (TODO)
	    * **regex** by building a NFA
	* **compression** (TODO)

---------

* **disjoint sets**
    * **quick-union** and **weighted quick union**

---------
* **priority queues** insert, delete, `lg n`, find min `1`
    * **binary heap**, complete binary tree (using an array) that childs is smaller than parent
        * insert: append the element, and move it up until...
        * delete: move last element their, then move it down
    * **Fibonacci heap** (TODO)

---------

* **lookup tables**
	* no constraints
		* linear structures not sorted
			* search, insert, delete `n`
		* **hash table** (separate chaining, linear probing)
		    * **uniform hashing**
			* search, insert, delete, average `1`, worst `n`
	* elements with linear order
		* sorted array
			* **binary search** `log n`
			* insert, delete `n`
		* tree structure. their average (worst except bst) search, insert, delete is all `log n`
		    * **binary search tree**
		    * balanced trees (TODO)
		        * **red-black tree**
		        * **B-tree**
		        * **splay tree**
		        * **AVL tree**
    * multi-dimensional elements (TODO)
		* **Cartesian tree**
        * **k-d tree**
    * **string lookup** with with small alphabet
        * **trie**
            * **prefix lookup**
            * **wildcard lookup**
        * **bk-tree**
            * **spell checking with edit distance**

---------

* other tree structure
    * **Fenwick Tree** 
---------

* **graph**, represented by adjacency lists
    * **DFS**, mark current, then recursively call adjs, ignore marked `V + E`
        * **topological sort** and **cycle detection**, by finding final trees in it, and add all things are final to an array
        * **connected components**
        * undirected graph with each node has even degree has **Eulerian cycle**, only two odd degree has **Eulerian path**, then they can be constructed by DFS
        * directed graph's **Eulerian trail** and **Eulerian cycle** depends on in-out degree and strong components
    * **BFS** `V + E`, **Dijkstra** `E * log V`, **A\***, mark current, put childs into PQ, try next
        * directed/undirected **single source shortest path** for uniform/positive-weighted graph
    * **shortest/longest path for DAG** relax by topological order `V + E`
        * **parallel job scheduling** using longest path
    * **IDDFS**, **IDA\*** (TODO)
    * **Bellman-Ford** for negative weights **single source shorted path**, detects negative cycles, `V * E`. scan all edges and relax them
    in `V-1` times, if you can still relax, then you got a negative cycle
    * **Floyd-Warshall** for **all pair shorted path** negative weights without negative cycles `V^3`
    * **Kosaraju** for **strong components** in directed graphs. dfs in the order of (reverse postorder of the reverse graph) `V + E`.
      consider a tree with first branch directional down, second bidirectional. if you reverse it, you get a tree
      with first branch directional up, second bidirectional. if you do the reverse postorder search from end of first
      tree, you will do it one pass, if you do it from left tree, you get two pass, the top of stack is always elements
      least reached if you follow (in original graph) the arrow... (TODO)
    * **minimal spanning tree** for weighted undirected graph
        * **Prim** add the minimal edge and vertex to the tree each step, using a PQ, `E * log V`
        * **Kruskal** add edges in order of length, skip the ones already connected
        * **Boruvka** initialize each vertex as disjoint components, for each component, add shortest edge to outside

