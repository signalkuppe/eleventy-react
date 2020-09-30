import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../components/features/system/utils";
import DefaultLayout from "../../../components/layout/Default";
import Head from "../../../components/layout/Head";
import Article from "../../../components/primitives/Article";
import Section from "../../../components/primitives/Section";
import Footer from "../../../components/primitives/Footer";
import Figure from "../../../components/primitives/Section";
import Img from "../../../components/primitives/Img";
import Span from "../../../components/primitives/Span";
import VerticalSpace from "../../../components/ui/VerticalSpace";
import withHtml from "../../../components/hoc/withHtml";
import { postSlug } from "../../../components/features/posts/utils";

/**
 * A template that renders a page for each post in the post collection (_posts/*.md)
 */

const StyledArticle = styled(Article)`
  max-width: 55ch;
  margin: 0 auto;
`;
const StyledFigure = styled(Figure)`
  margin-bottom: calc(${(props) => props.theme.spaceUnit} * 2);
`;

const StyledFooter = styled(Footer)`
  margin-top: calc(${(props) => props.theme.spaceUnit} * 2);
`;

const PostBodySection = withHtml(Section);

export const data = {
  permalink: function (data) {
    return postSlug(data.page);
  },
};

export default function Post(data) {
  const { site, title, description, content, cover, tags } = data;
  const { date } = data.page;
  return (
    <DefaultLayout
      head={
        <Head title={title} slogan={site.title} description={description} />
      }
      title={title}
      active="/blog/"
    >
      <StyledArticle>
        <StyledFigure>
          <Img
            src={cover}
            alt={title}
            responsive
            loading="lazy"
            width="1280px"
            height="853px"
          />
        </StyledFigure>
        <PostBodySection>{content}</PostBodySection>
        <StyledFooter>
          <Span bold>Published on </Span>
          {formatDate(date)}
          {tags?.length && (
            <>
              <VerticalSpace />
              {tags.map((tag, i) => (
                <Span key={i} italic>
                  {tag}
                  {i < tags.length - 1 && ", "}
                </Span>
              ))}
            </>
          )}
        </StyledFooter>
      </StyledArticle>
    </DefaultLayout>
  );
}
