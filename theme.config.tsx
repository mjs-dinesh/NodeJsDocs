import React from "react";

import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Interview Preparation</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Interview Template",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "Interview Preparations",
    };
  },
};

export default config;
