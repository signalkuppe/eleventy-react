import React from "react";
import { slug } from "./utils/user";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Heading from "../components/ui/Heading";
import List from "../components/ui/List";
import Link from "../components/ui/Link";
import Icon from "../components/ui/Icon";
import UserIcon from "./icons/user.svg";

/**
 * custom data for this template (Like front matter)
 */
export const data = {
  pageTitle: "Users",
};

/**
 * users come from users.js data file in _data
 * users are fetched from a public API to test aysnc data in templates
 */

export default function Users({ site, users, pageTitle }) {
  const { title, slogan } = site;
  return (
    <DefaultLayout
      head={<Head title={pageTitle} slogan={slogan} description={slogan} />}
    >
      <Heading>{pageTitle}</Heading>
      <List>
        {users.map((user, i) => (
          <Link key={i} href={slug(user)}>
            <Icon left icon={UserIcon} />
            {user.name}
          </Link>
        ))}
      </List>
    </DefaultLayout>
  );
}
