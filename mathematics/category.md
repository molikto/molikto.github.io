## category

$$
\def\dom{\operatorname{dom}}
\def\cod{\operatorname{cod}}
\def\img{\operatorname{img}}
\def\proj{\operatorname{proj}}
\def\id{\operatorname{id}}
\def\hom{\operatorname{hom}}
\def\op{\text{op}}
$$

* **directed graph** is a set $A$ of **arrows** and set $O$ of **object**. and two function $\dom$ and $\cod$ with type $A \to O$
* product over the graph is just pairs of arrows with $\dom g = \text{cod} f$

* a **category** is a graph with $\text{id}: O\to A$, $\circ : A \times_O A\to A$, where with proper domain conditions, and associativity law of composition, also unit axioms
	* we have examples 1, 2, 3, discrete categories, monoids, groups, groupoids, preorders (only one arrow between two object in one direction), partial orders (only one arrow between two object), linear order (one and only one), ordinals, **simplicial category** (finite ordinals and order-preserving functions)
	* **hom-set**, $\hom_C(a, b)$ is set of arrows $a\to b$ 
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
	* **terminal**, **initial**, **null object**, **zero arrow**

$$
\def\Cat{\mathcal{Cat}}
\def \Set{\mathcal{Set}}
$$

* **functor** is a map between two category, consists obj map and arr map, preserve unit and associ, category and functors forms $\Cat$
	* **forgetful functor** may be considered by (a, b) => (a) of a Sigma type
	* $T: C\to B$ and $S: B\to A$ has **composition** $S\circ T$,  is a functor $C\to A$. it is associ (because function composition is associ), and there is identity functor, so $\Cat$ of all small categories is a category
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


* **functor category**, **natural transformation**  $\tau$, **component** $\tau c$ **natural in** $c$: from $S, T: C\to B$ assigns each object $c$ an arrow $\tau c$ (the shape), $\forall c',f: c\to c', Tf\circ\tau c=\tau c'\circ Sf$
	* they form the functor category $B^C$. and **natural isomorphism** iff each component is isomorphism (proof `TODO`)
	* **equivalence of categories** $C$, $D$ is $(S, T, \tau_1, \tau_2)$, such that $\tau_1: I_C\simeq T\circ S$ and $\tau_2: I_D\simeq S\circ T$


* exercises, c01, p18
	1. $e$ is natural trasformation...
	2. trivial
	3. `TODO: alg`
	4. if there is, define the natural transform by that arrow. and we know that it is unique... trivial
	5. trivial
	6. `TODO: alg`


* exercises, c01, p21
	1.  trivial
	2.  trivial
	3. trivial
	4. `TODO: alg`
	5. `TODO: alg`
	6. all idempotents in $\Set$ split. for $f: C \to D$, $A = \{x|f(x) = x\}$, then $\img f= A$, because if $y\in\img f\land y = f(x)$ then $f(y)=f(f(x))=f(x)=y$, and also clearly $A\subset \img f$ because every $x\in A$ is image of itself. so $f = \proj_{\img f}\circ f $ also $\id_{\img f} = f\circ \proj_{\img f}$
	7. an arrow $f: a \to b$ is **regular** if there is $g: b\to a$ such that $f = f g f$
		1. $f$ has left or right inverse then is regular. trivial
		2. in $\Set$ every arrow with $a\neq \emptyset$ is regular. for everyone in $y\in\img f\land f(x) = y$ define $g(y) = x$ and for other values, define at any element. then $\forall x, f(g(f(x)))=f(x_1)$, where $x_1$ has property $f(x_1) = f(x)$
	8. we define the arrow by pointing $f(0)=e'$ and $f(1) = t'(e')$ and so on. we can see we can define and the definition is unique
	9. $fg=fk\implies TfTg=TfTk\implies Tg=Tk \implies g=k$


* exercises, c01, p24
	1. `omit`
	2. `omit`
	3. `omit`

## temp 

* **concrete category** $(C, U)$ where $U: C\to \Set$ is a faithful functor 

* `omit: p28 middle - p29` on **preadditive** and **bilinear**

* **duality in categories**, **opposite category**, **contravariant functor**, **power-set functor**
	* **covariant hom-functor** $\hom(a, \_): C \to \Set$, for $k: b\to b'$ we have it maps to $\hom(a, k)=k_*:\hom(a,b)\to\hom(a, b')$ by the functor
	* **contravariant hom-functor** $\hom(\_, a):C^\op\to \Set$, send $g$ to $g^*$
	* for $g: a\to a'$, $f: b\to b'$ we have a diagram `img`

* **product category**, **projection functor**, **product of two functors**, **bifunctors** $S: B\times C\to D$
	* $(U'\times V')\circ(U\times V)=U'U\times V'V$