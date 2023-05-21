---
sidebar_position: 5
---

# How I created my website

## Create

First, I used the following command to create the docusaurus template in a folder locally. I am using the folder name as `git-repo` to refer here. This folder will also be used to create a repository of the same name on Github.

```bash
npx create-docusaurus@latest git-repo classic
```

The following command can be used to run a local deployment server.

```bash
npm run start
```

Secondly, I created a repo named `git-repo` on Github. Then I used the following commands to upload to Github.

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

I deployed my website in _Github Pages_ using the following steps.

First, I used the following settings in the docusaurus [config file](./../../docusaurus.config.js):

```json
  url: "https://<github-username>.github.io",
  baseUrl: "/git-repo/",
  trailingSlash: false,
  organizationName: "<github-username>",
  projectName: "git-repo",
```

Secondly, I used the following command, since I use SSH keys for Github depoloyment.

```bash
$ USE_SSH=true yarn deploy
```

This command will build the website and push to the `gh-pages` branch. After sometime, the website comes available at my [Github Pages](https://rudejedi.github.io/docs-web/).

If Github [personal acess tokens](https://docs.Github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) are used insted of SSH , then the following command can be used for deployment.

```bash
$ GIT_USER=<Github username> yarn deploy
```