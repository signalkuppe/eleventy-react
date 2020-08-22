import React from "react";
import { slug } from "./utils/user";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Heading from "../components/ui/Heading";

/**
 * A template that renders a page for each user in the users collection
 */

export const data = {
  pagination: {
    data: "users",
    size: 1,
    alias: "user",
  },
  permalink: function (data) {
    return slug(data.user);
  },
};

export default function User({ site, user }) {
  const { slogan } = site;
  return (
    <DefaultLayout
      head={<Head title={user.name} slogan={slogan} description={slogan} />}
    >
      <Heading>{user.name}</Heading>
    </DefaultLayout>
  );
}
