

# mathematics

$$
\def\ZZ{\mathbb{Z}}
\def\RR{\mathbb{R}}
\def\Cat{\mathcal{Cat}}
\def \Set{\mathcal{Set}}
\def\AbCat{\mathbf{Ab}\text{-}\Cat}
\def\Mon\mathcal{Mon}
\def\Grp\mathcal{Grp}
\def\Gp\mathcal{Gp}
\def\Ab\mathcal{Ab}
\def\symdiff{\bigtriangleup}
\def\funrestri{\upharpoonright}
\def\dom{\operatorname{dom}}
\def\cod{\operatorname{cod}}
\def\img{\operatorname{img}}
\def\fimg{“}
\def\iimg{_{-1}}
\def\inv{^{-1}}
\def\ran{\operatorname{ran}}
\def\proj{\operatorname{proj}}
\def\id{\operatorname{id}}
\def\hom{\operatorname{hom}}
\def\endo{\operatorname{endo}}
\def\aut{\operatorname{aut}}
\def\inn{\operatorname{inn}}
\def\ker{\operatorname{ker}}
\def\coker{\operatorname{coker}}
\def\lcm{\operatorname{lcm}}
\def\gcd{\operatorname{gcd}}
\def\freegroup{\operatorname{F}}
\def\op{\text{op}}$$


[TOC]


## preface

### roadmap

* Set Theory, *Thomas Jech*
* [Set Theory for Category Theory](http://arxiv.org/abs/0810.1279), *Michael A. Shulman*
* `CTWM` Category Theory for Working Mathematicians, *Saunders Mac Lane*
* `MCHT` Modern Classical Homotopy Theory, *Jeffrey Strom*


### note principle

* no circular definition, but the order is not necessary linear

## logic

### a comment on logic and model theory
* the reason why we can study things like set theory (as the entire of mathematics) outside it is that the tools used to study them is much more weaker


## set theory

### ZFC


* **ZFC**
	* definition
		* a **first order logic** with **equality**
		* another predicate $\in$
		* **axioms**
			* basic axioms
				* **extensionality**. $\forall a, b (\forall z, z \in a \to z \in b) \to a =b$
				* **pairing**. there is a set $\{a, b\}$
				* **schema of separation**
				* **regularity (foundation)**. $\forall S(S\neq \emptyset \implies (\exists x\in S, S\cap x = \emptyset))$
				* **union**. it is $\bigcup X$, not binary
			* size increasing axioms
				* **power set** $P(X)$
				* **schema of replacement** (in Jech this is defined by functions, which is a class, but it can be also formulated by a logical property, which is more extendable)
			*  size assertion axiom
			 	* **infinity**

			* **choice**: family of non-empty sets has a choice function
	* examples
		* **empty set** $\emptyset$ by separation and infinite axioms
	* methods
		* $A\cap B$ $A-B$, $\bigcap C$ (c is a class) etc. by separation
		* **disjoint** $X\cap Y = \emptyset$
		* $A\cup B$ etc.
		* $X\symdiff Y = (X-Y)\cup(Y- X)$
		* **product set** $A\times B$ is defined by power set axiom, $A\times B\times C = (A\times B)\times C$, $X^n$
		* a family of set is disjoint if any two is disjoint. a **partition** of $X$ is a disjoint family of non-empty set with union $X$
	* theorems
		* **well-ordering theroem**


### other definitions

* **class** is a logical device, it behaves like set in terms of $\subset$, $C \cup D$, $C\cap D$, $\bigcup C$
* **ordered pair** can be defined formally as $(a,b)=\{\{a\}, \{a, b\}\}$, further, $(a, b, c) = ((a, b), c)$, ...
* $n$-ary **relation** is just a set of $n$-triples, **on** $X$ if $R\subset X^n$
	* **domain** of a relation $\dom R$
	* **range** $\ran R$
	* in general we can define relation as class
* **function** is a binary relation such that... (also can be a class). **on** X if $X = \dom f$, **onto** $Y$ if $Y = \ran f$. all functions with $\dom f = X$ and $\ran f \subset Y$ is $Y^X$ and it is a set
	* we understand function as it's graph, so a function might have different "type"
	* $x\mapsto x * 2$ is actually "lambda expression"
	* **injective**. **surjective**. **bijective**
	* **restriction** $f\funrestri X$. **extension**
	* **composition**
	* **image** $f(X)$, $f\fimg X$
	* **inverse image** $f\iimg Y$
	* **inverse** $f\inv$
* **binary relations**
	* **reflective**. **transitive**. **symmetry**
	* **antisymmetry** $p \leq b\land b\leq p \Rightarrow p = b$
	* **equivalence relation** $\equiv$ is reflective, transitive, symmetry
		* $X/\equiv$ **quotient** of $X$ by $\equiv$ is a partition. conversely a partition defines a equivalence relation...
	* **poset** is reflective, transitive, antisymmetry
	* **linear ordering** is poset and (forall $p$, $q$ we have $p \leq q$ or $q \leq p$)
* **binary operation**, **law of composition**, $X\times X\to X$
	* associative
* poset $P$
	* methods
		* subset $X\subset P$
			* **maximal**: _ not smaller than any
			* **minimal**: no one is smaller than _
			* **greatest**
			* **least**
			* **upper bound**
			* **lower bound**
			* **supremum**, **lub**, **least upper bound** $\sup X$
			* **infimum**, **glb**, **greatest lower bound**, $\inf X$
		* $F: P \to Q$
			* **order-preserving**, **increasing**: $x < y\implies f(x) < f(y)$

* **well-ordering** $W$ is a linear ordering such that each non-empty subset hes least element
	* methods
		* **initial segment** $u\in W$,  is all elements less than $u$
	* theorems
		* $f: W\to W$ is increasing, then $\forall x\in W,f(x)\geq x$
			* corollary. there is only one automorphism and isomorphism if exists between well-orderings
		* two well ordering can be isomorphic or one is isomorphic to the initial segment of the other

### ordinal numbers

* **transitive** set is every element of $T$ is subset of $T$
* **ordinal number** is transitive and well ordered by $\in$
	* methods
		* $\alpha + 1 =  \alpha \cup \{\alpha\}$ is **successor ordinal**
		* **limit ordinal**. example $0=\emptyset$, $\omega = \infty$
		* **finite**. **infinite**. **finite/infinite sequence**
		* **transfinite sequence**, $\alpha$-**sequence**
		* **limit** of non-decreasing ordinal $\alpha$-sequence
		* **normal** sequence $\gamma_\alpha$: increasing and **continuous** (limit at limit ordinal is itself)
		* **ordinal arithmetic**
		* **cumulative hierarchy** $V_\alpha$
	* theorems
		* every well order set isomorphic to an ordinal
		* **transfinite recursion**

### cardinal numbers

* comparing size of sets
	* defintion
		* two set has same **cardinality** if there is bijection
		* $|X| \leq |Y|$ by exists injection
		* $\kappa+\lambda = |A\cup B|$. where $\kappa = $...
		* $\kappa\cdot\lambda = |A\times B|$
		* $\kappa^\lambda = |A^B|$
	* theorems
		* $|X| <|P(X)|$
		* $|A|\leq |B|$ and $|B|\leq|A|$ then $|A|=|B|$
		* $|P(A)| = 2^{|A|}$
		* **cardinal arithmetic** ...
* **cardinal number** is ordinal $\alpha$ such that $|\alpha|\neq|\beta|$ for $\beta < \alpha$.
	* methods
		*  infinite cardinal is **aleph**. **countable** is $\aleph_0$. **uncountable**
		* **limit cardinal**
		* **strong limit**
		* **regular**
		* **inaccessible**
		* **Grothendieck universe** is $V_\alpha$ for some inaccessible $\alpha$
	* theorems
		* $\aleph_\alpha \cdot \aleph_\alpha = \aleph_\alpha$
		* $\RR$ is uncountable



### universe axiom
* **universe** any set is contained in a universe $U$
	* comments
		* http://math.stackexchange.com/questions/79343/is-the-axiom-of-universes-harmless



## universal algebra

### lattice theory
* **lattice**: each two objects in the pos has join, $\sup$, $a\lor b$ and meet, $\inf$, $a\land b$
* **bounded lattice**: have $0$ and $1$ and $0 \leq p \leq 1$
* **distributive lattice**: $p \land (q \lor r) = (p\lor q)\land (p \lor r)$
* **complete lattice**: all subset has join and meet, so it is a bounded lattice
* **de Morgan algebra**
	* defintion
		* bounded distributive lattice
		* with $1 -p$ satisfying
			* $1-(p\land q) = (1-p)\lor(1-q)$
			* $1-(1-p) = p$
* **congruence lattice of a algebra $\mathcal{A}$**: the set of all congruence relations respect to the algebra. because there is a natural meet, and you can define the join by first take relations join, then the meet of all congruence relations containing the join, or say, the closure
	* theorems
		* it is complete and distributive lattice

 
## category theory

### chapter 01. categories, functors, and natural transformations

* **directed graph** is a set $A$ of **arrows** and set $O$ of **object**. and two function $\dom$ and $\cod$ with type $A \to O$
	* (formal) product over the graph is just pairs of arrows with $\dom g = \text{cod} f$. it is just pairs, not triples
	* expanded graph (? is the compositions finite or not?)
	* commutative diagram (all possible composition between two object is the same arrow
		* `MCHT 1.1` show diagram commutative iff expanded diagram commutative

* a **category** is a graph with $\text{id}: O\to A$, $\circ : A \times A\to A$, where with proper domain conditions, and associativity law of composition, also unit axioms
	* examples. 1, 2, 3, discrete categories, monoids, groups, groupoids, preorders (only one arrow between two object in one direction), partial orders (only one arrow between two object, this is a great example!), linear order (one and only one), ordinals, **simplicial category** (finite ordinals and order-preserving functions)
	* methods
		* **hom-set**, $\hom_C(a, b)$ is set of arrows $a\to b$ 
		* it is **small** in universe $U$ if the set of objects and arrows is in $U$
		* **inverse** or $f$ is $g$: $fg = \text{id}, gf = \text{id}$
			* inverse is unique. $g=gfg_1=g_1$
			* reflective, transitive, and symmetry. thus define a equivalence relation
			* **isomorphism**: a arrow has inverse, **isomorphic** objects has isomorphism between
		* **endomorphism** $\endo A$, **idempotent**, **automorphism** $\aut A$
	* **monic** or **left cancelable** $m$, $m\circ f_1=m\circ f_2\implies f_1 = f_2$, compose is also monic. $g\circ f$ monic then $f$ monic (trivial)
	* **epi** or **right cancelable** $h$, $g_1\circ h=g_2\circ h\implies g_1 =g_2$, compose is also epi
	* for $h: a\to b$ a **right inverse** or **section** is $r: b \to a$ such that $hr=1_b$ (not usually unique), and makes $h$ a **split epi** *($r$ select from the domain $a$)*
		* `MCHT 1.6` a arrow having a left inverse which has a left inverse is a isomorphism pair
		* for $h: a\to b$ a **left inverse** or **retraction** is $l : b\to a$ such that $lh=1_a$ and makes $h$ a **split monic**. the $a$ is sometimes called a **retract** of $b$. *(imagine the domain is larger, and the $h$ is just a embedding, then $l$ will retract the codomain back)*
			* `MCHT 1.9` show that in the arrow category of certain category, $f$ is retract of $g$. then if $g$ is a isomorphism, $f$ is. and $f$ is, then $g$ maybe not. first part is trivial. second part is also trivial. all other maps is $\id$ except $g$
		* if $fg=1_a$ then there is a left inverse, a right inverse and a idempotent, and it is a **split idempotent**
		* **terminal**. **initial**
		* **null object**. **pointed category**. **zero arrow** (trivial morphism) factor through null object. **wedge** is coproduct in pointed categories


* **functor** is a map between two category, consists obj map and arr map, preserve unit and associ, category and functors in one universe $U$ forms $\Cat$ in another universe	
	* $T: C\to B$ and $S: B\to A$ has **composition** $S\circ T$,  is a functor $C\to A$. it is associ (because function composition is associ), and there is identity functor, so $\Cat$ of all small categories is a category
	* isomorphism iff bijection on object and arrows. this is super natual, because category is a set construction so there isomorphism is a set bijection thing
	* methods
		* **forgetful functor** (vague) may be considered by (a, b) => (a) of some Sigma type
		* **full functor**, $\forall c, c_1, \forall g: Tc\to Tc_1\exists f: c\to c_1: g = Tf$
			* compose is full
		* **faithful functor** $\forall c, c_1, \forall f, f_1: c\to c_1, Tf = Tf_1\implies f = f_1$
			* compose if faithful
		* **subcategory** and **inclusion functor** is faithful *(sub meaning get from removing some obj and arr)*. **full subcategory** when the inclusion functor is full *(you are not removing arrows without removing one of it's domain)*

* `CWM c01 p15`
	
	* `4` they are **symmetric groups**, consider the permutations of two elements, then map it two permutations of three elements by ignoring the third element. then map to permutations of two elements by ignoring the third element, the composition is $\id$
	* `5` [evil answer](http://mathoverflow.net/questions/4276/two-functors-from-grp-to-grp)


* **functor category** $B^C$, **natural transformation**  $\tau$, **component** $\tau c$ **natural in** $c$: from $S, T: C\to B$ assigns each object $c$ an arrow $\tau c$ (the shape), $\forall c',f: c\to c', Tf\circ\tau c=\tau c'\circ Sf$
	* they form the functor category $B^C$. and **natural isomorphism** iff each component is isomorphism (trivial. componentwise)
	* $B^2$ is the **category of arrows**
	* **equivalence of categories** $C$, $D$ is $(S, T, \tau_1, \tau_2)$, such that $\tau_1: I_C\simeq T\circ S$ and $\tau_2: I_D\simeq S\circ T$
		* idea: compare alike category of different "size"


* `CWM c01 p18`
	1. $e$ is natural trasformation...
	2. trivial
	3. `TODO alg`
	4. if there is, define the natural transform by that arrow. and we know that it is unique... trivial
	5. trivial
	6. trivial


* `CWM c01 p21`
	1.  trivial
	2.  trivial
	3. trivial
	4. `TODO alg`
	5. `TODO alg`
	6. all idempotents in $\Set$ split. for $f: C \to D$, $A = \{x|f(x) = x\}$, then $\img f= A$, because if $y\in\img f\land y = f(x)$ then $f(y)=f(f(x))=f(x)=y$, and also clearly $A\subset \img f$ because every $x\in A$ is image of itself. so $f = \proj_{\img f}\circ f $ also $\id_{\img f} = f\circ \proj_{\img f}$
	7. an arrow $f: a \to b$ is **regular** if there is $g: b\to a$ such that $f = f g f$
		1. $f$ has left or right inverse then is regular. trivial
		2. in $\Set$ every arrow with $a\neq \emptyset$ is regular. for everyone in $y\in\img f\land f(x) = y$ define $g(y) = x$ and for other values, define at any element. then $\forall x, f(g(f(x)))=f(x_1)$, where $x_1$ has property $f(x_1) = f(x)$
	8. we define the arrow by pointing $f(0)=e'$ and $f(1) = t'(e')$ and so on. we can see we can define and the definition is unique
	9. $fg=fk\implies TfTg=TfTk\implies Tg=Tk \implies g=k$


* `CWM c01 p24`
	1. for a function with domain $I$ in $U$ and each value point $f_i$ in $U$, then the cartesian product $\prod_i f_i$ is in $U$ 
	2. `omit`
	3. `omit`

* **concrete category** $(C, U)$ where $U: C\to \Set$ is a faithful functor 

* **preadditive category** a category where each hom-set is a abelian group, and $(g+g')\circ(f+f')=g\circ f+g\circ f'+g'\circ f+g'\circ f'$
	* if we use $\hom$ set to define categories, then we see in the definition of preadditive category a similar pattern: using $\Ab$ and tensor product. these is called **enriched category**
	* a functor between two preadditive category is **additive** if each function between hom-sets is a homomorphism. compose is also additive. then $\AbCat$ is is the category of preadditive category with additive functors

### chapter 02. constructions on categories

* **duality in categories** (by **elementary theory of absract category**), **opposite category**, **contravariant functor**, **power-set functor**
	* **covariant hom-functor** $\hom(a, \_): C \to \Set$, for $k: b\to b'$ we have it maps to $\hom(a, k)=k_*:\hom(a,b)\to\hom(a, b')$ by the functor. $k_*(f) = k\circ f$
	* **contravariant hom-functor** $\hom(\_, a):C^\op\to \Set$, send $g$ to $g^*$. $g^* (f) = f\circ g$
	* for $g: a\to a'$, $f: b\to b'$ we have a diagram `img`, which is used to proof that $\hom$ is a bifunctor

* **product category**, **projection functor**, **product of two functors** $U\times V: B\times C\to B'\times C'$ can be defined by universal arrow
	* $(U'\times V')\circ(U\times V)=U'U\times V'V$
	* then $\times : \Cat\times \Cat \to \Cat$ can be considered as a functor itself (in the domain, you can consider them formal pairs of categories, the above line proofs associ)
	* $(B\times C)^\op \simeq B^\op\times C^\op$. because they are just formal pairs


* **bifunctors** $S: B\times C\to D$. euqualivant way to discribe in term of functor: for $c\in C$ and $b\in B$ $L_c: B\to D$ and $M_d: C\to D$ and $M_b(c) = L_c(b)$, $\forall f: b\to b'\forall g: c\to c', M_b' g\circ L_c f = L_{c'} f\circ M_b g$. proof: see the book *(it is just a easier statement of functoriality in the case of product category)*. proof is easy
	* $\hom: C^\op\times C\to Set$ is a bifunctor

* **natural transformations of bifunctors** for $S, S': B\times C\to D$, and $\alpha$ an function $(b, c)\mapsto \alpha(b, c)$ to arrows in $D$, $S(b, c)\to S'(b,c)$, $\alpha$ **natural in $b$** (b is dumy variable) if for each $c\in C$, $\alpha(\_, c): S(\_, c)\to S'(\_, c)$ is a natural transformation of functors $B\to D$. such an $\alpha$ is a natural transformation iff natural in $b$ for each $c$ and natural in $c$ for each $b$. proof use projects in dimensions
* **universal natural transformation** of $C$, $u$, in the sense that for any $\tau$, we have a unique bifunctor $F: C\times 2\to B$ and $Fu=\tau$



* `CWM c02 p39`
	1. trivial
	2. only one times only one is only one
	3. trivial
	4. `TODO alg`
	5. `TODO alg`

* `CWM c02 p41`
	1. `TODO alg`
	2. trivial
	3. trivial
	4. $Q^P$ is preorder. they are only determined by the nodes in the image, also a natural transformation is requires that all arrows exists. so if there is one, there is only one
	5. `TODO: alg`
	6. `TODO: alg`
	7. trivial
	8. $H: C\to B^2$, $F: C\times 2\to B$ `TODO`



* **horizontal composition of natural transformations** (notice the writing order). proof use the line -> square -> cube diagram
	* $\tau'\circ \tau = (T' \circ \tau)\cdot (\tau' \circ S)=\ldots$
	* $(\tau'\cdot\sigma')\circ (\tau\cdot\sigma)=(\tau'\circ\tau)\cdot(\sigma'\circ\sigma)$, also $\id$ arrow for horizontal is $\id$ for vertical. proof by the 4 cube diagram
	* **double category** satisfies the interchange law, **2-category** add $\id$ for horizontal composition is $\id$ for vertical
* the functor category $\_^{\_}$ is itself a functor $\Cat^\op\times \Cat\to \Cat$ which looks like $\hom$

* `CWM c02 p44`
	1. bijection. first one is by composing with.... `TODO` too many details
	2. `TODO`
	3. `TODO`
	4. `TODO alg`
	5. *Hilton-Eckmann* `TODO`
	6. `TODO alg`
	7. `TODO`
	8. `TODO`





* **comma category** $(T\downarrow S)$ where $T: E\to C$ and $S: D\to C$. $(C\downarrow a)$ objects over $a$. $a\downarrow C$ objects under $a$

* `CWM c02 p48`
	1. $K$-algebra as comma category
	2. trivial
	3. trivial
	4. trivial
	5. `TODO`
	6. `TODO`

* **free category**

* `CWM c02 p51 TODO`

* **quotient category**

* `CWM c02 p51 TODO`


### chapter 03. universals and limits



* $S: D\to C$ is a functor and $c\in C$ **universal arrow** from $c$ to $S$ is a $r\in D$ and $u: c\to Sr$, which is inital in comma category $(c\downarrow S)$ (or say: such that every pair $d$, $f$ there is a unique arrow $f': r\to d$ where $Sf'\circ u = f$. or every arrow $f$ to $S$ factors uniquely through the universal arrow $u$)
	* universal element
	* iff the compose by $u$ function is a bijection $D(r, d)\cong C(c, S d)$ for each $d$ and natural in $d$ (viewing each side as a $C\to \Set$). (proof: bijection is easy, natual is )
	* $K: D\to \Set$ is **representable functor** if there is natural isomorphism $D(r, \_)\cong K$
	* `TODO` any repsentation of functor $K$ is from a universal arrow from one point set $*$

* `TODO` for $K: D\to \Set$ and $r\in D$ there is $y: \hom(D(r, \_), K)\cong Kr$, and it is natural in ($K$ and $r$) (both side viewed as a functor from... to $\Set$)


* `CWM c03 p59`
	1. `TODO`
	2. `TODO`
	3. `TODO`
	4. `TODO`
	5. `TODO`
	6. `TODO`
	7. `TODO`

* `CWM c03 p62`
	1. `TODO`
	2. `TODO`
	3. `TODO`
	4. `TODO`

* **colimit** is universal arrow from $F\in C^J$ to diagnoal functor $\delta: C\to C^J$ (means it maps into a master object, and the master object maps to other ones which mapped into by old objects) the arrows are *cone* (maps into the vertex)
	* **diagonal functor**, **coproduct**, **injection**
		* **infinite coproduct**
		* **copower** if $A$ in coproduct is equal. $\coprod_x b$ write as $X\cdot b$ (consider in $\Set$ it is $X\times Y$)
	* **cokernel** (normalily a quotient object)
		* **coqualizer**
	* **pushout**
		* **cokernel pair** is the pushout of same arrow

* `CWM c03 p68 TODO`

* **limit**
	* **product**, **projection**, **diagonal map**
		* for all map $f$ have have $f\times f$

* `CWM c03 p72 TODO`

* **category with finite product**

* `CWM c03 p74 TODO`

* **group object**

* `CWM c03 p76 TODO`

* any functor $K: D\to \Set$ from a small category $D$ is a colimit of representable functors $\hom(d, \_)$


### chapter 04. adjoints


* **adjoint**
	* ways to determine an adjoint