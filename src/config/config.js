import { dev } from "./environment/dev";
import { production } from "./environment/prod";

let config;

switch (process.env.REACT_APP_STAGE) {
  case "dev":
    config = dev;
    break;
  case "prod":
    config = production;
    break;
 
  default:
    config = dev;
}

export const appConfig={
   config:config
}