import React from "react";
import styled from "styled-components";
import { userFormat, userSlug } from "../components/features/users/utils";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Div from "../components/primitives/Div";
import Dl from "../components/primitives/Dl";
import Dt from "../components/primitives/Dt";
import Dd from "../components/primitives/Dd";
import VerticalSpace from "../components/ui/VerticalSpace";
import Avatar from "../components/ui/Avatar";

/**
 * A template that renders a page for each user in the users collection
 */

const Content = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const data = {
  pagination: {
    data: "users",
    size: 1,
    alias: "user",
  },
  permalink: function (data) {
    return userSlug(data.user);
  },
};

export default function User({ site, user }) {
  const { title } = site;
  const description = `${userFormat(user)}’s profile`;
  return (
    <DefaultLayout
      head={
        <Head
          title={userFormat(user)}
          slogan={title}
          description={description}
        />
      }
      title={userFormat(user)}
      active="/users/"
    >
      <Content>
        <Avatar image={user.avatar} size={12} />
        <VerticalSpace size={2} />
        <Dl>
          <Dt>Email</Dt>
          <Dd>{user.email}</Dd>
          <Dt>Username</Dt>
          <Dd>@{user.username}</Dd>
        </Dl>
      </Content>
    </DefaultLayout>
  );
}
