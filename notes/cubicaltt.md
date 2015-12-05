
# notes on paper `cubicaltt.pdf`

[TOC]


* reference
	* http://www.math.ias.edu/~amortberg/papers/cubicaltt.pdf

$$
\def\sup{\operatorname{sup}}
\def\inf{\operatorname{inf}}
\def\Con{\operatorname{Con}}
$$





## lattice theory

* partialy ordered set
	* reflective $p \leq p$
	* transitive $p \leq b\land b\leq c\Rightarrow p \leq c$
	* antisymmetry $p \leq b\land b\leq p \Rightarrow p = b$
* lattice: each two objects in the pos has join, $\sup$, $a\lor b$ and meet, $\inf$, $a\land b$
* bounded lattice: have $0$ and $1$ and $0 \leq p \leq 1$
* distributive lattice: $p \land (q \lor r) = (p\lor q)\land (p \lor r)$
* complete lattice: all subset has join and meet, so it is a bounded lattice
* de Morgan algebra
	* bounded distributive lattice
	* with $1 -p$ satisfying
		* $1-(p\land q) = (1-p)\lor(1-q)$
		* $1-(1-p) = p$
* congruence lattice of a algebra $\mathcal{A}$ is the set of all congruence relations respect to the algebra. because there is a natural meet, and you can define the join by first take relations join, then the meet of all congruence relations containing the join, or say, the closure. it is complete and distributive lattice

 
## basic type theory

$$
\def\eqs{::=}
\def\s{\operatorname{s}}
\def\natrec{\operatorname{natrec}}
\def\I{\mathbb{I}\ }
\def\F{\mathbb{F}\ }
\newcommand{\P}[3]{\operatorname{Path}#1\ #2\ #3}
\newcommand{\pa}[2]{\left<#1\right >\ #2}
\def\comp{\operatorname{comp}}
\def\fill{\operatorname{fill}}
$$

firstly we define several fundamental concept

* context $\Gamma$, $\Delta$, variable $x$
  * empty context $()$
  * context with a variable $x$ of type $A$: $\Gamma, x: A$

* term $t$, $u$, type $A$, $B$
  * variable: $x$
  * pi type: $(x: A) \to B$
  * lambda: $\lambda x : A. t$
  * application: $t\ u$
  * sigma type: $(x: A)\times B$
  * pair: $(t, u)$
  * projection: $t.1$, $t.2$
  * nat: $N$
  * zero, succ: $0$, $\s u$
  * natrec: $\natrec t\ u$

* substitutions $\sigma=(x/u, ...,x/u)$

* then we have 5 judgement and inference rules
  * is a context: $\Gamma\vdash$
  * is a type **under a context**: $\Gamma\vdash A$
  * is a term of type **under a context**: $\Gamma\vdash t: A$
  * type eq **under a context**: $\Gamma\vdash A = B$
    * (`TODO` why there is a type eq? what about formulate them using universe?)
  * term eq **under a context**: $\Gamma\vdash a = b: A$
	  * computation rule for $(\lambda x: A. t) u = t(x/u)$
	  * computation rule for sigma
	  * for nat

* context morphisms $\Delta\vdash \sigma: \Gamma$
	* $\Delta\vdash () : ()$ the first $()$ is an empty substitution, the second is an empty context
	* $\Delta\vdash (\sigma, x/u): \Gamma, x: A$ if $\Delta\vdash \sigma: \Gamma$ and $\Gamma\vdash u: A\sigma$. this is adding a variable to a context, as before the context morphism contains more information than the context
* we use $J$ for a judgemnt and consider also hypothetical judgements $\Gamma\vdash J$
	* weakening: $\Gamma\vdash J$ then valid in all extensions of $\Gamma$
	* substitution: $\Gamma\vdash J$ and $\Delta\vdash \sigma : \Gamma$ then $\Gamma\vdash J\sigma$
	* from eq judgements we derive exists judgements and type judgements

## path types

* names $i$, $j$, $k$ is a discete infinite set, and $\I$ the free de Morgan algebra on it, or
* lattices nodes $r$, $s$
	* $0$, $1$, $i$, $1- r$, $r\land s$, $r\lor s$
* we extends context $\Gamma$, $\Delta$ with name declarations
	* $\Gamma, i: \I$
	*  also a rule that for any context $\Gamma\vdash$, and any $i$ not in the context, $\Gamma, i: \I\vdash$
		* we can understand a type $A$ in this context as a cube, square, becuase getting this context is easy, then we can use $i$ inside $A$ to obtain a type like a cube
	* $\Gamma\vdash r: \I$ means $r$ is a node depending only on names in $\Gamma$
	* judgement $\Gamma\vdash r= s: \I$
* we extends the terms with
	* path type: $\P{A}{t}{u}$
	* path abstraction: $\pa{i}{t}$
	* path application: $ t\ r$

* extends substitution with $(i/r)$ forms and $(i/0)$ written as $(i0)$

* extends inference rules with
	* $\Gamma\vdash A$, $\Gamma\vdash t, u: A$ $\Rightarrow$ $\Gamma\vdash\P{A}{t}{u}$
	* $\Rightarrow$ $\Gamma\vdash \pa{i}{t}: \P{A}{t(i0)}{t(i1)}$
	* a path in type $A$ when applied with a point in $\I$ will return again a value in type $A$: $\Rightarrow$ $t\ r : A$
	* $\Rightarrow$ $\Gamma\vdash (\pa{i}{t})\ r = t(i/r):A$
	* appling at a end will return the end in the path type: $\Rightarrow$ $t\ 0 = u_0$ where $t: \P{A}{u_0}{u_1}$
	* $1_a: \P{A}{a}{a} = \pa{i}{a}$

* effects of node substitution
	* $(i/j)$ is renaming dimenstion
	* $(i/1-i)$ is reversing
	* connections
* examples. all of them will request you have a non-trivial path first then get another path, but by far the only way to get a path is by identity
	* image of equal elements is equal
	* funext. proof by type checking
	* singletons is contractible. the proof uses connections

## face lattice

* face lattice $\varphi, \psi\in\F$ is free distributive bounded lattice on symbols $(i = 1)$ $(i= 0)$ with relation $(i = 0)\land(i = 1) = 0_\F$
	* any element is a union (join) of irreducible element (meets of $(i = 1, 0)$)
	* there is a canoical map $\I\to\F$
		* sending $i$ to $(i = 1)$
		* sending $(1-i)$ to $(i= 0)$
		* we write $(r = 1)$ for the image of $r$ in $\F$
		* we write $(r = 0)$ for the image of $1-r$
		* we have $(r = 1)\land (r = 0) = 0_\F$
	* it can be seen as sub-polyhedra of a cube
		* boundary $\partial _I$ is the greatest element $< 1_\F$

* we extends the judgements: $\Gamma\vdash \psi : \F$ means $\psi$ is only using names in $\Gamma$
* context restriction: $\Gamma\vdash \psi : \F$ $\Rightarrow$ $\Gamma, \psi\vdash$
	* then we extends the type (**?**), by saying a type in a restricted context is a union of compatible faces of the **original** unrestricted cube

* canonical (lattice) map from $\F$ to $\Con(\I)$ (seems the order is **reversed**)
	* $(i = 1)$ to the congruence identifying $i$ with $1$
	* $(i = 0)$ to the congruence identifying $i$ with $0$
	* then any $\psi\in \F$ defines a congruence $r = s\mod{\psi}$
	* if $\psi$ is irreducible like $(i = 0)\land(j = 1)$ then $r = s\mod{\psi}$ is equivalent to $r(i0)(j1) = s(i0)(j1)$
	* and the join is mapped to meet
* to any context $\Gamma$ we have a congruence of $\I$ defined on it. the empty context is identity on $\I$, adding variable or name doesn't change it, adding a restriction will change it
* and any context defines a congruence on $\F$  with $\Gamma, \psi\vdash\varphi_1 = \varphi_2: \F$ means $\Gamma\vdash\psi\land\varphi_1= \psi\land\varphi_2: \F$
* we define $\forall i .\varphi$ as the join of all irreducible elements $\leq \varphi$ independent of $i$
	* if $\psi$ is independent of $i$, then $\psi \leq \varphi \iff \psi\leq \forall i.\varphi$

## systems

* we extends syntex of term and type by 
	* $S$ system: $[\varphi_1\ t_1, ..., \varphi_n\ t_n]$
		* can be empty
* and judgements, all of them bellow under the condition $\Gamma \vdash \varphi_1\lor...\lor\varphi_n = 1_\F: \F$, which means $\Gamma$ is sufficiently restricted( to allow the system to be a complete thing that can exists under the non $\varphi$ restricted context $\Gamma$)
	* if under the contexts having types $\Gamma, \varphi_n\vdash A_n$ we have the types compatible $\Gamma, \varphi_i\land\varphi_j\vdash A_i = A_j$ then the system is a type $\Gamma\vdash[\varphi_1 A_1,... , \varphi_n A_n]$ (seems the equality is done by thinking of substitutions)
	* if we have a **single** type $\Gamma\vdash A$ and we have $\Gamma, \varphi_n\vdash t_n: A$ and we have $\Gamma,\varphi_i\land \varphi_j\vdash t_i = t_j: A$ then $\Gamma\vdash [..., \varphi_i t_i,...]: A$
		* consider the case $n = 0$ then $\Gamma\vdash []: A$
	* if a judgement $J$ is valid in all $\Gamma, \varphi_n$ then it is valid in $\Gamma$
	* $\Gamma\vdash \varphi_i = 1_\F: \F$ then $\Gamma\vdash [...,\varphi_i A_i,...] = A_i$
	* $\Gamma\vdash [..., \varphi_i t_i,...]: A$ and $\Gamma\vdash \varphi_i = 1_\F: \F$ then  $\Gamma\vdash [..., \varphi_i t_i,...]=t_i: A$

* we extends the substituion judgement by $\Delta\vdash \sigma: \Gamma, \varphi$ if $\Delta\vdash \sigma:\Gamma$ and $\Gamma\vdash \varphi :\F$ and $\Gamma\vdash\varphi\sigma=1_\F: \F$

* we write $\Gamma\vdash a: A[\varphi_1\to u_1,...,\varphi_k\to u_k]$ if $\Gamma \vdash a: A$ and $\Gamma, \varphi_i\vdash a =u_i: A$
	* the great element $a$ is a witness of the parital elements $u$ is **connected**

* the follows rules with $J$
	* $\Gamma\vdash \varphi\leq \psi$ then any judgemnt $J$ valid in bigger restriction is true in the smaller one
	* adding $1_F$ is trivial
	* merging $\varphi$ and $\psi$ into $\varphi\land \psi$ is trivial
	* if $i$ and $\varphi$ is **independent**, then exchange them in context is trivial
		* $\Gamma, i: \I, \varphi\vdash J$ then $\Gamma, \forall i, \varphi, i: \I\vdash J$

## composition operation

* we extends the syntax by
	* $\comp^i A[\varphi\to u] a_0$ where $u$ is a system
* the typing rule
	* if firstly the context $\Gamma$ is itself a cube and can be restricted by $\varphi$: $\Gamma\vdash \varphi$
	* and we have a type $A$ depending on an extra dimension: $\Gamma, i: \I: A$
	* and in theis restricted * new dimension settting we have an element of $A$: $\Gamma, \varphi, i: \I\vdash u: A$
	* and we have in one end of the new dimension, the partial elemnt $u$ is connected:
	 $\Gamma\vdash a_0: A(i0)[\varphi\to  u(i0)]$
	* then on the other end it is also connected:
	 $\Gamma\vdash \comp^i A[\varphi\to u]a_0: A(i1)[\varphi\to  u(i1)]$. where $\comp^i$ binds $i$ in $A$ and $u$
		* in particular if $\varphi=1_\F$, the last result is written as $\Gamma\vdash \comp^i A [1_\F\to u]a_0=u(i1)$
* if we have a substitution $\Delta\vdash \sigma\Gamma$ then the $i$ in $A$ $u$ is replaced by a fresh variable $j$. corresponds to the **uniformity** (?) of composition

* a troubling remark: use $[\varphi_1\to u_1, ..., \varphi_n\to u_n]$ for $[\lor_i\varphi_i\to[\varphi_1 u_1, ..., \varphi_n u_n]]]$  also $[]$ for $[0_\F\to []]$
* we can proof path transitivity by using comp

## Kan filling

* $\Gamma, i: \I\vdash \fill^i A[\varphi\to u]a_0= \comp^j A(i/i\land j)[\varphi\to u(i/i\land j), (i = 0)\to a_0]a_0: A$