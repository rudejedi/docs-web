---
sidebar_position: 1
---

# How I created my website

This website was created using [**Docusaurus**](https://docusaurus.io) framework.

## Create

First, I used the following command to create the docusaurus template in a folder locally. I am using the folder name as `git-repo` to refer here. This folder will also be used to create a repository of the same name on GitHub.

```bash
npx create-docusaurus@latest git-repo classic
```

The following command can be used to run a local deployment server.

```bash
npm run start
```

Secondly, I created a repo named `git-repo` on GitHub. Then I used the following commands to upload to GitHub.

```bash
cd git-repo/
git init
git add .
git commit -m "<commit-name>"
git branch -M main
git remote add origin git@github.com:<github-username>/git-repo.git
git push -u origin main
```

## Build

The following command builds the site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

The following command builds the site locally, which can be served at [http://localhost:3000/](http://localhost:3000/).

```bash
npm run serve
```

## Deploy

Now, we can deploy the `build` folder as per the **[Deployment Guide](https://docusaurus.io/docs/deployment)**.

I deployed my website in _GitHub Pages_ using the following steps.

First, I used the following settings in the docusaurus `docusaurus.config.js` file:

```json
  url: "https://<github-username>.github.io",
  baseUrl: "/git-repo/",
  trailingSlash: false,
  organizationName: "<github-username>",
  projectName: "git-repo",
```

Secondly, I used the following command, since I use [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for GitHub deployment.

```bash
$ USE_SSH=true yarn deploy
```

This command will build the website and push to the `gh-pages` branch. After sometime, the website comes available at my [GitHub Pages](https://rudejedi.github.io/docs-web/).

If GitHub [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) are used instead of SSH , then the following command can be used for deployment.

```bash
$ GIT_USER=<github-username> yarn deploy
```
