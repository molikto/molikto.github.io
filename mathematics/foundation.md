
# set theory




* references
	* Set Theory, *Thomas Jech*
	* Category Theory for Working Mathematicians, Preliminaries, *Saunders Mac Lane*
	* [Set Theory for Category Theory](http://arxiv.org/abs/0810.1279), *Michael A. Shulman*
	
[TOC]

## motivation

i want to study mathematics, but i want to do it rigidly, then i found that i need to build a proof assistant, probability based on HoTT related things. but to understand the model of HoTT, i need math again... so in the end, i need to do rigid math without a pa first. that's why i am making these notes and that's why i want to be rigid from the bottom up

## ZFC


* we work in **ZFC**, which is a **first order logic** with **equality** with **axioms**
	* **extensionality**. $\forall a, b (\forall z, z \in a \to z \in b) \to a =b$
	* **pairing**. there is a set $\{a, b\}$
	* **schema of separation**
	* **union**. it is $\bigcup X$, not binary
	* **power set**
	* **infinity**
	* **schema of replacement** (in Jech this is defined by functions, which is a class, but it can be also formulated by a logical property, which is more extendable)
	* **regularity (foundation)** has a $\in$ minimal
	* **choice**


## basic definitions
* **function**
* **relation**
* **binary relations**
	* reflective
	* transitive
	* symmetry
	* **equivalence relation**: reflective, transitive, symmetry


## a comment on logic and model theory
* the reason why we can study things like set theory (as the entire of mathematics) outside it is that the tools used to study them is much more weaker


## categorical concerns

* category is small with respect to a universe if the collections of object and arrows is a set

# universe axiom
* **universe** any set is contained in a universe $U$
	* asides
		* http://math.stackexchange.com/questions/79343/is-the-axiom-of-universes-harmless
