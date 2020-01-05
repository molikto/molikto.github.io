---
title: Middle Grounds between Structural Editing and Text Editing
---



For editors of programming languages, where user manipulate some textual representation of the AST, users usually have some level of freedom to break out what is considered valid AST, and we list some of them from the most strict ones to least:
* Most structural editor only allow syntax-correct programs, like [Hazel](https://hazel.org/), [Lamdu](https://www.lamdu.org/) or [Fructure](https://fructure-editor.tumblr.com/). Sometimes they project to a lines-of-token presentation (Hazel), sometimes not (Lamdu)
* [MPS](https://www.jetbrains.com/mps/)  is an editor that constantly performs syntax-directed and type-directed editing on the AST, but mimics text-editors. It allows some level of incorrect syntax. But in general the AST is not parsed, you cannot perform some complex editing, for example, wrapping some code by  `{}` and hope it just works like in a text editor. Most of time the projection is lines-of-token, but they support two dimensional math expressions, and tables.
* [Eco](https://github.com/softdevteam/eco) is an editor that works like a text editor when you are editing in a single language, but you can compose different languages and these language boxes works in a structural editor way
* text editors


I think editors more strict (including) than MPS has their problems (which I will not elaborate here).
 
Let's consider what's between MPS and Eco, remembering Eco's idea is based on incremental lexing & parsing:

* An editor where token is edited structurally like MPS but syntax is incrementally parsed like Eco. So the data format in this editor is not a syntax tree (like in MPS), or string (like in text editors, and to some extends, Eco), but is a sequence of tokens
 
This has the advantage:
 
* Because whitespace is insignificant after lexing, we can do automate layout: you cannot do this in Eco because tokens is incrementally lexed, so you must preserve the whitespace and new lines exactly as whitespace will affect lexing result
* Escape characters is not needed, so you can have a keyword `define` and a variable `define` and they will be displayed in different color
* Edits will not change token's type, which is most of time undesired. We can have a "paste as plain text" like rich text editors to escape from this restriction
* Color and font matters: for example in a [cubical type theory](https://github.com/agda/cubical) `1` can means number literal or a constant formula, but in Cubical Agda you need to write `i1` for the second case. In the proposed editor, they can have different font, and which one is selected is edited in a type-directed way

Also this allows a much more text-editor like UX: actually it is just a rich text editor.


