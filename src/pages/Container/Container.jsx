import styled from "styled-components";
import { mediaQueries } from "../../mediaQueries";

export const Container = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);

  ${mediaQueries("xs")`
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  `}

  ${mediaQueries("md")`
    margin-left: auto;
    margin-right: auto;
  `}
`;
