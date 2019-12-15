---
title: Growing a Structural Editor: Layout Combinators
---

We have a tree editor now, but the visualization as a tree is not user-friendly, we need to layout the information in the tree in a compat way.

The algorithm to do this is called a pretty printer. It is just traditionally pretty print print to a plain text file, but our pretty printer will try to layout GUI widgets.

The reverse of a parser combinator is a layout combinator. We have these basic combinator: 

```scala
sealed trait Template
object Template {
  case class Str(content: String) extends Template
  case class Field(name: String) extends Template
  case class Tree(
    before: Seq[Template],
    content: Seq[Template],
    separator: Option[Template],
    after: Seq[Template]
  ) extends Template
  case class Compose(content: Seq[Template]) extends Template
}
```

The way `Compose` works is like in [Wadler's "A Prettier Printer"](https://github.com/typelevel/paiges)

Then each `Record` and `Case` will have a `Template`, and when layout the AST, we will layout according to the template. 

The algorithm is a lot like [This post](http://www.lihaoyi.com/post/CompactStreamingPrettyPrintingofHierarchicalData.html). But we are not doing it streamed, but generate `Frag`s which is a layout with line breaking point determined, then each line will be measured so that baseline is aligned etc.
