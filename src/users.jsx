import React from "react";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Pager from "../components/ui/Pager";
import VerticalSpace from "../components/ui/VerticalSpace";
import UserList from "../components/features/users/ui/UserList";

/**
 * custom data for this template (Like front matter)
 */
export const data = {
  pageTitle: "Users",
  description: "A list of users",
  pagination: {
    data: "users",
    size: 6,
  },
  permalink: function (data) {
    const pageNumber = data.pagination.pageNumber;
    const baseUrl = "users";
    if (pageNumber > 0) {
      return `${baseUrl}/page-${pageNumber}/index.html`;
    } else {
      return `${baseUrl}/index.html`;
    }
  },
};

/**
 * users come from users.js data file in _data
 * users are fetched from a public API to test aysnc data in templates
 */

export default function Users({ site, pageTitle, description, pagination }) {
  const { title } = site;
  return (
    <DefaultLayout
      head={<Head title={pageTitle} slogan={title} description={description} />}
      title={pageTitle}
    >
      <UserList users={pagination.items} />
      <VerticalSpace size={4} />
      <Pager pagination={pagination} />
    </DefaultLayout>
  );
}
