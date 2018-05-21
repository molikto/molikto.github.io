---
title: Tutorial: Compiled Normalization by Evaluation for Untyped Lambda Calculus (in Scala)
---


> This tutorial assumes you know untyped lambda calculus. And jargons like "normal form", "$\beta$-reduction". *Types and Programming Languages*, Chapter 3 will be sufficient.
> The code will be written in Scala, but it should be readable for any one familiar with functional languages


## Basics
Our terms of lambda calculus is defined as this, we are using [de Bruijn index](https://en.wikipedia.org/wiki/De_Bruijn_index):

```scala
abstract class Term
abstract class Value extends Term
case class Var(i: Int) extends Term
case class Abs(term: Term) extends Value
case class App(left: Term, right: Term) extends Term
```

We define some shorthand notation, (like *TAPL*, but unlike the Wikipedia article, our de Bruijn index starts with 0):

```scala
val v0 = Var(0)
val v1 = Var(1)
val v2 = Var(2)
```
Some example of terms of lambda calculus includes:

* Church numeral 0: $\lambda x. \lambda y. y$.
  or in code `val c0 = Abs(Abs(v0))`
* Church numeral 1: $\lambda x. \lambda y. (x\ y)$.
  or in code `val c1 = Abs(Abs(App(v1, v0)))`
* Church numeral 2: $\lambda x. \lambda y. (x (x\ y))$.
  or in code ` val c2 = Abs(Abs(App(v1, App(v1, v0))))`
* successor function: $λn. λs. λz. s ((n\ s) z)$.
  `val suc = Abs(Abs(Abs(App(v1, App(App(v2, v1), v0)))))`

Suppose you have an [interpreter for lambda calculus](http://matt.might.net/articles/writing-an-interpreter-substitution-denotational-big-step-small-step/). we will call it `eval: Term => Value`. What the interpreter usually do is they compute the term to a "value" (`Value`) which usually means "weak-head normal form". What this means is basically it computes the `App`s in a "call by value" fashion, stops when the "head" (root of the term) is a abstraction (= lambda, `Abs`).

For example: `eval(App(suc, c1))` is $\lambda s \lambda z. s (((\lambda x. \lambda y. (x\ y)) s) z)$
or in code: `Abs(Abs(App(v1,App(App(Abs(Abs(App(v1,v0))),v1),v0))))`

but we can still reduce $((\lambda x. \lambda y. (x\ y)) s$ to $\lambda y (s\ y)$ inside the above lambda expression, and finally reduce the body to Church numeral 2.

## Normalizers

Unlike normal interpreters, normalizers will reduce inside the lambda expression and get normal form of possibly open expressions.

Normalizers has their applications in partial evaluation and proof checkers like Coq.

One can imagine create a normalizer that reduce the terms in the same fashion like a "substitutional interpreter", but can reduce inside lambda expressions.  That's one way to create normalizers.

But what we are talking today is another way: we create a *program* in some programming language (where we write the normalizer), such that the program will evaluate to some structure, and later we can read the structure back to a term and that term is the desired normal form. This technique is called normalization by evaluation.

Recall the definition of $\beta$-reduction:

> an application of the form $(\lambda x. t)s$ reduces to the term $t[x:=s]$.

In lambda calculus, normal form means their is no more $\beta$-reduction we can make anymore, or such that all applications in a normal form will be something like

  * $x\ v$ where $x$ is a variable and $v$ is also in normal form
  * forms like $(x\ y) z$
  * $((x y) z) k)$ where $x$ is a variable

This inspires us to translate our `Term` to structure like this:
```scala
abstract class Head() {
  def app(head: Head): Head
}

case class Lam(f: Head => Head) extends Head {
  override def app(head: Head) = f(head)
}

case class Acc(depth: Int, as: Seq[Head] = List.empty) extends Head {
  override def app(head: Head) = Acc(depth, as :+ head)
}
```
```scala
import com.twitter.util.Eval

def nbe(t: Term): Term = {
  def emitScala(t: Term, depth: Int = -1): String = t match {
    case Var(i) =>
      if (i > depth) s"Acc(${i - depth - 1})"
      else "v" + (depth - i)
    case Abs(t) =>
      val d = depth + 1
      s"Lam((v$d: Head) => {${emitScala(t, d)}})"
    case App(l, r) =>
      s"(${emitScala(l, depth)}).app(${emitScala(r, depth)})"
  }
  val text = emitScala(t)
  val compiled = new Eval().apply[Head](text)
  def readback(h: Head, depth: Int = -1): Term = h match {
    case Lam(f) =>
      val d = depth + 1
      Abs(readback(f(Acc(-d - 1)), d))
    case Acc(d, seq) =>
      seq.foldLeft[Term](Var(depth + d + 1)) { (l, s) =>
        App(l, readback(s, depth))
      }
  }
  readback(compiled)
}
```

Full code [here](https://github.com/molikto/ChihuahuaLang/blob/master/common/src/main/scala/UntypedLambdaCalculus.scala#L135).
