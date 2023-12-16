import React from "react";

import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Node Js Interview Preparation</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Node Js Interview Template",
  },
  useNextSeoProps() {
    return {
      titleTemplate:
        "MERN | Nest Js | Node Js | React | React Native | Next Js | Docs | Interview Preparations |",
    };
  },
};

export default config;
