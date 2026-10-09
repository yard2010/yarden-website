# Assignment 1 - Personal Website

This is a template repo for ex1.

## How to use this template

First up, you should be using GitHub's template functionality to create your own
code repository using this repository as a starting point.
[See the GitHub documentation on creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Once you have created your own repository from this template, you can use Git to
clone the repository to your local machine.

When you have a local copy of your repository, you can proceed with the next
steps in this document.

## Getting Started

You need [Node.js](https://nodejs.org) version 24 or newer. Check with
`node --version` in your terminal.

Ensure you have a local copy of the repository, and, in your terminal, navigate
to the root of the repository.

### Install the dependencies

The codebase has libraries it depends on to run - these are refered to as
"dependencies". You need to install these dependencies before you can run the
codebase. To install the dependencies, run the following command in your
terminal:

```bash
npm install
```

### Run the development server

The codebase uses a development server to run the code. This is a server that
runs on your local machine, and allows you to view the code in your browser. To
run the development server, run the following command in your terminal:

```bash
npm run dev
```

## View the application in your browser

Once the server is running, you can view the application in your browser. To do
this, open Chrome (or Chromium), and type the following into the address bar:

```bash
http://localhost:3000
```

## Other commands you can run

The codebase is set up with a number of commands you can run. These are defined
in the `package.json` file, in the `scripts` section. The following are
available:

**Compile a production build of your website, into the `dist/` folder**

```bash
npm run build
```

**Build, then preview the production build in your browser**

```bash
npm run preview
```

## Putting your website on the internet

The website is published with [Cloudflare](https://dash.cloudflare.com), for
free. You set it up once, and after that **every push to `main` goes live by
itself**.

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com), then go to
   **Compute** → **Workers & Pages** → **Create**. Choose **Pages** (not
   Workers), then **Import an existing Git repository**, and pick your
   repository.
2. Fill in the settings:

   | Field                      | Set it to                                  |
   | -------------------------- | ------------------------------------------ |
   | **Project name**           | your site name, it becomes part of the URL |
   | **Production branch**      | `main`                                     |
   | **Framework preset**       | `None`                                     |
   | **Build command**          | `npm run build`                            |
   | **Build output directory** | `dist`                                     |

3. Press **Save and Deploy**. When it finishes, Cloudflare shows your address,
   something like `https://my-website.pages.dev`.
