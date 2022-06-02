import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --very-dark-grayish-blue: ${theme.color.veryDarkGrayishBlue};
    --desaturated-dark-blue: ${theme.color.desaturatedDarkBlue};
    --grayish-blue: ${theme.color.grayishBlue};
    --light-grayish-blue: ${theme.color.lightGrayishBlue};
    --white: ${theme.color.white};
    --ff-manrope: ${theme.typography.family.manrope};
    --fs-body: ${theme.typography.body.fontSize};
    --fw-medium: ${theme.typography.weight.medium};
    --fw-bold: ${theme.typography.weight.bold};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--ff-manrope);
    font-size: var(--fs-body);
  }
`;

export default GlobalStyle;
