## category


* **directed graph** is a set $A$ of **arrows** and set $O$ of **object**. and two function $\text{dom}$ and $\text{cod}$ with type $A \to O$
* product over the graph is just pairs of arrows with $\text{dom} g = \text{cod} f$
* a category is a graph with $\text{id}: O\to A$, $\circ : A \times_O A\to A$, where with proper domain conditions, and associativity law of composition, also unit axioms
	* we have examples 1, 2, 3, discrete categories, monoids, groups, groupoids, preorders (only one arrow between two object in one direction), partial orders (only one arrow between two object), linear order (one and only one), ordinals, **simplicial category** (finite ordinals and order-preserving functions)
	* **inverse** or $f$ is $g$: $fg = \text{id}, gf = \text{id}$
		* inverse is unique. $g=gfg_1=g_1$
		* reflective
		* **isomorphism**: a arrow has inverse, **isomorphic** objects has isomorphism between
	* **endomorphism**, **idempotent**, **automorphism**
	* **monic** or **left cancelable** $m$, $m\circ f_1=m\circ f_2\implies f_1 = f_2$, compose is also monic. $g\circ f$ monic then $f$ monic (trivial)
	* **epi** or **right cancelable** $h$, $g_1\circ h=g_2\circ h\implies g_1 =g_2$, compose is also epi
	* for $h: a\to b$ a **right inverse** or **section** is $r: b \to a$ such that $hr=1_b$ (not usually unique), and makes $h$ a **split epi**
	* for $h: a\to b$ a **left inverse** or **retraction** is $l : b\to a$ such that $lh=1_a$ and makes $h$ a **split monic**
	* if $fg=1_a$ then there is a left inverse, a right inverse and a idempotent, and it is a **split idempotent**
	* for $r\circ i = id: X\to Y\to X$
* **functor** is a map between two category, consists obj map and arr map, preserve unit and associ
	* **forgetful functor** may be considered by (a, b) => (a) of a Sigma type
	* $T: C\to B$ and $S: B\to A$ has **composition** $S\circ T$,  is a functor $C\to A$. it is associ (because function composition is associ), and there is identity functor, so $\mathcal{Cat}$ of all small categories is a category
	* **full functor**, $\forall c, c_1, \forall g: Tc\to Tc_1\exists f: c\to c_1: g = Tf$
		* compose is full
	* **faithful functor** $\forall c, c_1, \forall f, f_1: c\to c_1, Tf = Tf_1\implies f = f_1$
		* compose if faithful
	* **subcategory** and **inclusion functor** is faithful. **full subcategory** when the inclusion functor is full

* exercises, c01, p15
	1. `TODO: alg`
	2. trivial
	3. trivial
	4. `TODO: alg`
	5. trivial

\(
\def\Cat{\mathcal{Cat}}
\)

* $\mathcal{Cat}$ **natural transformation**  $\tau$, **component** $\tau c$ **natual in** $c$: from $S, T: C\to B$ assigns each object $c$ an arrow $\tau c$ (the shape), $\forall c',f: c\to c', Tf\circ\tau c=\tau c'\circ Sf$
	* they form the functor category $B^C$. and **natural isomorphism** iff each component is isomorphism (proof `TODO`)
	* **equivalence of categories** $C$, $D$ is $(S, T, \tau_1, \tau_2)$, such that $\tau_1: I_C\simeq T\circ S$ and $\tau_2: I_D\simeq S\circ T$


* exercises, c01, p18
	1. $e$ is natural trasformation...
	2. trivial
	3. `TODO: alg`
	4. if there is, define the natural transform by that arrow. and we know that it is unique... trivial
	5. trivial
	6. `TODO: alg`

## temp 

* exercises, c01, p21
	1.  trivial
	2.  trivial
	3. trivial
	4. `TODO: alg`
	5. `TODO: alg`
	6. 
