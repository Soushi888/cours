# Rust lesson 0 - Setup dev environment

## Setup dev environment

In this lesson, we will install the Rust toolchain and set up our development environment.

### Install Rust

To install Rust, we will use [rustup](https://rustup.rs/). Rustup is the official tool for installing Rust. It will install the Rust toolchain and the Cargo package manager.

To install Rustup, run the following command in your terminal:

``` bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

This will download and run the Rustup installation script. The script will ask you a few questions. You can accept the default values by pressing the `Enter` key.

Once the installation is complete, you can check that Rust is installed by running the following command:

``` bash
rustc --version
```

You should see something like this:

``` bash
rustc 1.51.0 (2fd73fabe 2021-03-23)
```

### Install VS Code

We will use [VS Code](https://code.visualstudio.com/) as our text editor. VS Code is a free and open-source text editor developed by Microsoft. It is available for Windows, macOS and Linux.

To install VS Code, go to the [VS Code download page](https://code.visualstudio.com/download) and download the appropriate version for your operating system.

### Install the Rust extension for VS Code

To install the Rust extension for VS Code, open VS Code and press `Ctrl+Shift+X` to open the Extensions tab. Search for `rust` and install the `Rust (rls)` extension.

![img.png](img/rust-extension.png)

### Install the Rust extension for IntelliJ IDEA

If you are using IntelliJ IDEA, you can install the [Rust plugin](https://plugins.jetbrains.com/plugin/8182-rust) from the plugin repository.

## Cargo

Cargo is the Rust package manager. It is used to build, test and package Rust projects. Cargo is installed with Rustup.

### Create a new project

To create a new project, run the following command in your terminal:

``` bash
cargo new hello-world
```

This will create a new directory called `hello-world` with the following structure:

``` bash
hello-world
├── Cargo.toml
└── src
    └── main.rs
```

The `Cargo.toml` file contains the project metadata. The `src` directory contains the source code. The `main.rs` file is the entry point of the program.

### Build the project

To build the project, run the following command in your terminal:

``` bash
cargo build
```

This will compile the project and create an executable file in the `target/debug` directory.

### Run the project

To run the project, run the following command in your terminal:

``` bash
cargo run
```

This will compile and run the project.
The difference between `cargo build` and `cargo run` is that `cargo run` will also run the executable file while `cargo build` will only compile the project.