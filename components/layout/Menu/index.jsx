import React from "react";
import Nav from "../../primitives/Nav";
import Ul from "../../primitives/Ul";
import Li from "../../primitives/Li";
import A from "../../primitives/A";
import Icon from "../../ui/Icon";
import HomeIcon from "../../../src/icons/home.svg";

const sections = [
  {
    title: "Back to the homepage",
    text: "Home",
    href: "/",
    icon: HomeIcon,
    noText: true,
  },
  {
    title: "A test page",
    text: "Info",
    href: "/info",
  },
  /* 
  {
    title: "The blog",
    text: "Blog",
    href: "/blog",
  },*/
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
      <Ul inline reset>
        {sections.map((section, i) => (
          <Li key={i}>
            <A title={section.title} href={section.href}>
              <Icon icon={section.icon} />
              {!section.noText && section.text}
            </A>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}
