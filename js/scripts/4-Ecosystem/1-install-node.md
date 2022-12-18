[//]: # (Totorial about how to install node js with nvm)

# Node JS Installation with NVM

## What is Node JS?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a
browser.
Node.js lets developers use JavaScript to write command line tools and for server-side scripting among other things.

## What is NVM?

NVM is a version manager for Node.js, designed to be installed per-user, and invoked per-shell. It works by creating
symlinks to the Node.js binary for each version of Node.js installed. It also creates shims for global commands,
forwarding them to the active version of Node.js.

## Installation

Run this bash command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

## Usage

### Install Node JS

To install the latest version of Node JS, run:

```bash
nvm install node
```

To install a specific version of Node JS, run:

```bash
nvm install 16.18.1
```

### Use Node JS

To use the latest version of Node JS, run:

```bash
nvm use node --lts
```

To use a specific version of Node JS, run:

```bash
nvm use 16.18.1
```

### List Node JS

To list all installed versions of Node JS, run:

```bash
nvm ls
```

### Uninstall Node JS

To uninstall a specific version of Node JS, run:

```bash
nvm uninstall 16.18.1
```

## Resources

- [Node JS](https://nodejs.org/en/)
- [NVM Github](https://github.com/nvm-sh/nvm)