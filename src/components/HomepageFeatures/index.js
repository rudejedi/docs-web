import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Documentation for self hosted services",
    Svg: require("@site/static/img/desktop-classic.svg").default,
    description: (
      <>
        This website constains documentaion for some the services that can be
        easily selfhosted to replace the popular proprietary ones.
      </>
    ),
  },
  {
    title: "My Blog",
    Svg: require("@site/static/img/post-outline.svg").default,
    description: (
      <>There is also a blog section where you I put my ideas/thoughts.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
