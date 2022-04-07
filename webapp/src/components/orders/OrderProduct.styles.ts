import styled from "styled-components";

export const Wrapper = styled.div`
  
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  .container {
    display:grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    justify-content: strech;
  }

  img {
    grid-column: 1 / 3;
    grid-row: 1/3;
    max-width: 120px;
    margin-left: 40px;
  },

  .information {
    grid-column: 1 / 4;
  }
`;