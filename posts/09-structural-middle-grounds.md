---
title: Middle Grounds between Structural Editing and Text Editing
---



For editors of programming languages, where user manipulate some textual representation of the AST, users usually have some level of freedom to break out what is considered valid AST, and we list some of them from the most strict ones:
* [Hazel](https://hazel.org/) is an editor where no **typing error** is allowed
* [Lamdu](https://www.lamdu.org/) is an editor where no syntax error is allowed
* [MPS](https://www.jetbrains.com/mps/)  is an editor that constantly performs syntax-directed and type-directed editing on the AST, but mimics text-editors
* [Eco](https://github.com/softdevteam/eco) is an editor that works like a text editor when you are editing in a single language, but you can compose different languages and these language boxes works in a structural editor way
* text editors


I think editors more strict (including) than MPS has their problems (which I don't want to elaborate).
 
Let's consider what's between MPS and Eco, remembering Eco's idea is based on incremental parsing:

* An editor where lexicon is edited structurally like MPS but syntax is incrementally parsed like Eco.
 
This has the advantage:
 
* Escape characters is not needed, so you can have a keyword `define` and a variable `define` and they will be displayed in different color
* Edits will not change lexicon's type, which is most of time undesired. We can have a "paste as plain text" like rich text editors to escape from this restriction
* Color and font matters: for example in a [cubical type theory](https://github.com/agda/cubical) `1` can means number literal or a constant formula, but in Cubical Agda you need to write `i1` for the second case. In the proposed editor, they can have different font, and which lexicon is selected is edited in a type-directed way

Also this allows a much more text-editor like UX: actually it is just a rich text editor.


---------

(This might be what I am going to do with the medit project, because I found whole structural way is too restricted and not practical, and generally I think this is an unexplored land)

