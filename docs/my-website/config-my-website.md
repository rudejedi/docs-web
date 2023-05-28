---
sidebar_position: 2
---

# How I configured my website

After the website was created and deployed as given in this [page](create-build-deploy.md), I used the configurations as given below.

More details are available at docusaurus [documentation](https://docusaurus.io/docs) site.

## Theme colour

There is a nice tool [here](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to generate different shades for readability.

The colours are then edited in `/src/css/custom.css` for `light` and `dark` mode.

```css
:root {
  --ifm-color-primary: #1a5fb4;
  --ifm-color-primary-dark: #1755a2;
  --ifm-color-primary-darker: #165199;
  --ifm-color-primary-darkest: #12427e;
  --ifm-color-primary-light: #1d68c6;
  --ifm-color-primary-lighter: #1e6dcf;
  --ifm-color-primary-lightest: #2074dc;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --ifm-color-primary: #1a5fb4;
  --ifm-color-primary-dark: #85b4ed;
  --ifm-color-primary-darker: #97bff0;
  --ifm-color-primary-darkest: #85b4ed;
  --ifm-color-primary-light: #85b4ed;
  --ifm-color-primary-lighter: #85b4ed;
  --ifm-color-primary-lightest: #87b5ee;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
```

## Icons

The icons are featched from [Pictogrammers](https://pictogrammers.com/library/mdi/) and put in `/static/img/` folder.

## Homepage

### `docusaurus.config.js` file.

More details are available [here](https://docusaurus.io/docs/configuration).

**Note:** The below code is not complete. My `docusaurus.config.js` is availabe [here](https://github.com/rudejedi/docs-web/blob/main/docusaurus.config.js)

In `docusaurus.config.js`, I configured the following.

- Website title, tagline and favicon.
- "Edit this page" links.
- Navbar, sidebar, footer and copyright.

```js
const config = {
  // Configure website title, tagline and favicon.
  title: "Website Title",
  tagline: "Website Tagline",
  favicon: "img/favicon.ico",

  // Configure "edit this page" links.
  presets: [
    [
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/<github-username>/git-repo/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/<github-username>/git-repotree/main/",
        },
        },
      }),
    ],
  ],

// Configure navbar, sidebar, footer and copyright.
  themeConfig:
    ({
      navbar: {
        title: "Site info",
        logo: {
          alt: "My Site Logo",
          src: "img/image3.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/<github-username>/git-repo",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documenation",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} abc.org. Built with Docusaurus.`,
      },
    }),
};
```

### Homepage header

Homepage header is configured in `/src/pages/index.js`. My configuration is available [here](https://github.com/rudejedi/docs-web/blob/main/src/pages/index.js).

```js
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Text to display 🖥
        </Link>
      </div>
    </header>
  );
}
```

### Feature lists

The feature lists in the homepage is configured in `/src/components/HomepageFeatures/index.js` file.

**Note:** The below code is not complete. My configuration is availabe [here](https://github.com/rudejedi/docs-web/blob/main/src/components/HomepageFeatures/index.js)

```js
const FeatureList = [
  {
    title: "Feature 1",
    Svg: require("@site/static/img/image1.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dof eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: "Feature 2",
    Svg: require("@site/static/img/image2.svg").default,
    description: (
      <>
        Ipsum dolor sit amet consectetur adipiscing elit ut. Amet massa vitae
        tortor condimentum lacinia.
      </>
    ),
  },
];

// I increased the column size from 4 to 6 to fit from the original docusaurus 3 features
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>

    <other-codes-remains-same>

    </div>
  );
}
```
