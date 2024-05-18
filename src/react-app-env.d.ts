/// <reference types="react-scripts" />

// declaration: *.module.css
declare module "*.module.css" {
  const classes: { [selector: string]: string };

  export default classes;
}