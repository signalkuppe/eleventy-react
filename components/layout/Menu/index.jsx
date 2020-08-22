import React from "react";
import Nav from "../../primitives/nav";
import List from "../../ui/List";
import Link from "../../ui/Link";

const sections = [
  {
    title: "Back to the homepage",
    text: "Home",
    href: "/",
  },
  {
    title: "The users list",
    text: "Users",
    href: "/users",
  },
  {
    title: "Storybook stories",
    text: "Storybook",
    href: "/storybook",
  },
];

export default function Menu() {
  return (
    <Nav>
      <List inline reset>
        {sections.map((section, i) => (
          <Link key={i} title={section.title} href={section.href}>
            {section.text}
          </Link>
        ))}
      </List>
    </Nav>
  );
}
