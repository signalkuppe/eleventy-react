import React from "react";
import { pagedPermalink } from "../components/features/system/utils";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Pager from "../components/ui/Pager";
import VerticalSpace from "../components/ui/VerticalSpace";
import PostList from "../components/features/posts/ui/PostList";

/**
 * custom data for this template (Like front matter)
 */

export const data = {
  pageTitle: "Blog",
  description: "A list of the site posts",
  pagination: {
    data: "collections.posts",
    size: 6,
  },
  permalink: (data) => pagedPermalink(data.pagination, "blog"),
};

/**
 * posts come from markdown files in /posts
 * each post will render the /_includes/layouts/post.jsx component
 * every post is added to the "posts" collection via .eleventy.js config file
 */

export default function Posts({
  page,
  site,
  pageTitle,
  description,
  pagination,
}) {
  const { title } = site;
  return (
    <DefaultLayout
      head={<Head title={pageTitle} slogan={title} description={description} />}
      title={pageTitle}
      active="/blog/"
    >
      <PostList posts={pagination.items} />

      <VerticalSpace size={4} />
      <Pager pagination={pagination} />
    </DefaultLayout>
  );
}
