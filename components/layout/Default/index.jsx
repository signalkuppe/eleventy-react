import React from "react";
import ThemeProvider from "../../../theme/ThemeProvider";
import Menu from "../Menu";

export default function Default({ children, head, scripts }) {
  return (
    <ThemeProvider>
      <html lang="en">
        {head}
        <body>
          <Menu />
          {children}
          {scripts}
        </body>
      </html>
    </ThemeProvider>
  );
}
