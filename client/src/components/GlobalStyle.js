import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
    font-family: 'Poppins';
    background-color: #E8EFF9;
}
a{
    text-decoration: none !important;
}
.link{
    text-decoration: none !important;
}

@media screen and (max-width: 500px) {
    html{
        font-size: 10px;
    }
}
`;
