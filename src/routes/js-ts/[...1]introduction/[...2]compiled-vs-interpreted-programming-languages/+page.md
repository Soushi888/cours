---
title: Compiled vs. Interpreted Programming Languages
description: Page description.
---

# {$frontmatter.title}

The difference between compiled and interpreted programming languages lies in how their code is executed:

1. **Compiled Languages**: In compiled languages, the source code written by the programmer is translated into machine code by a compiler before it can be executed. This process happens in one step, and the resulting executable file can be run on any compatible computer without needing the original source code or the compiler. Examples of compiled languages include C, C++, and Fortran.

2. **Interpreted Languages**: In contrast, interpreted languages are not directly converted into machine code by a compiler. Instead, an interpreter reads and executes the source code line by line during runtime. This means that the program runs while being read by the interpreter, which translates each line of code into machine code as it goes. The advantage here is that changes made to the source code can be seen immediately without having to recompile the entire program. Examples of interpreted languages include Python, Ruby, and JavaScript (when running in a browser).

In summary, the key differences are:
- **Compilation Time vs. Runtime Execution**: Compiled languages require all code to be translated into machine code before execution, while interpreted languages execute code line by line during runtime.
- **Speed of Execution**: Generally, compiled languages tend to run faster because the translation step happens once, and the resulting machine code is optimized for execution. Interpreted languages can be slower due to the overhead of interpreting code during runtime.
- **Development Speed**: Interpreted languages often allow for quicker development cycles since changes can be seen immediately without recompilation. Compiled languages may require a longer wait time between making changes and seeing the results.
- **Portability**: Compiled languages produce machine code specific to the target system, making executables less portable across different hardware architectures without recompilation. Interpreted languages can often run on any system that has an interpreter installed, making them more portable.

These differences influence the choice of programming language for specific applications, depending on factors like execution speed requirements, development efficiency, and target platforms.