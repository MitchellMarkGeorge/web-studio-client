import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBackground: string;
      secondaryBackground: string;
      primaryText: string;
      secondaryText: string;
      primaryAccent: string;
    };
  }
}
