import React from "react";
import styled from "styled-components";
import { styles as aStyles } from "../primitives/A";
import { styles as pStyles } from "../primitives/P";
import { styles as strongStyles } from "../primitives/Strong";
import { styles as emStyles } from "../primitives/Em";
import { styles as h2Styles } from "../primitives/H2";
import { styles as h3Styles } from "../primitives/H3";
import { styles as h4Styles } from "../primitives/H4";
import { styles as imgStyles } from "../primitives/Img";
import { styles as ulStyles } from "../primitives/Ul";
import { styles as olStyles } from "../primitives/Ol";
import { styles as hrStyles } from "../primitives/Hr";

export default function (Component) {
  const StyledComponent = styled(Component)`
    a {
      ${aStyles}
    }

    strong {
      ${strongStyles}
    }

    em {
      ${emStyles}
    }

    p {
      ${pStyles}
    }

    h2 {
      ${h2Styles}
    }

    h3 {
      ${h3Styles}
    }

    h4 {
      ${h4Styles}
    }

    img {
      ${imgStyles}
    }

    ul {
      ${ulStyles}
    }

    ol {
      ${olStyles}
    }

    hr {
      ${hrStyles}
    }
  `;
  return ({ children, ...props }) => {
    return (
      <StyledComponent
        {...props}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  };
}
