import "styled-components";

//extend styled-components types
declare module "styled-components" {
  export interface CustomTheme {
    button: {
      primary: string;
      secondary: string;
      operations: string;
      toggle: string;
    };

    buttonsWrapper: string;
    container: string;
    display: string;

    text: {
      primary: string;
      secondary: string;
    };
  }
}
