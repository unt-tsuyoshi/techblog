import { css } from '@emotion/react';
import dayjs, { locale, extend } from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import { breakpointUp } from '../styles/mq';

export const Blogs = ({ blogs }) => {
  const calcDateDiff = (publishedDate) => {
    locale('ja');
    extend(relativeTime);
    const datediff = dayjs(publishedDate).fromNow();
    return datediff;
  };

  return (
    <>
      <ul css={list}>
        {blogs.map((blog) => {
          if (blog.blog_category === 'qiita') {
            return (
              <li key={blog.id} css={list_item}>
                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                  <div css={list_item_inner}>
                    <h2 css={blog_title}>{blog.title}</h2>
                    <div css={blog_info}>
                      <p css={blog_category}>{blog.blog_name}</p>
                      <p css={blog_publishDate}>
                        {calcDateDiff(blog.created_at)}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            );
          } else if (blog.blog_category === 'techblog') {
            return (
              <li key={blog.id} css={list_item}>
                <Link href={blog.url}>
                  <a>
                    <div css={list_item_inner}>
                      <h2 css={blog_title}>{blog.title}</h2>
                      <div css={blog_info}>
                        <p css={blog_category}>{blog.blog_name}</p>
                        <p css={blog_publishDate}>
                          {calcDateDiff(blog.created_at)}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

const list = css`
  max-width: 900px;
  margin: 30px auto 0;
  ${breakpointUp('md')} {
    display: flex;
    flex-wrap: wrap;
    gap: 50px 40px;
  }
`;

const list_item = css`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;

  ${breakpointUp('md')} {
    width: calc((100% - 40px) / 2);
    /* height: 180px; */
  }

  &:not(:first-of-type) {
    margin-top: 30px;

    ${breakpointUp('md')} {
      margin-top: 0;
    }
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const list_item_inner = css`
  padding: 40px 20px 15px;
  ${breakpointUp('md')} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const blog_title = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
`;

const blog_info = css`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  ${breakpointUp('md')} {
    margin-top: 55px;
  }
`;

const blog_publishDate = css`
  font-size: 14px;
`;

const blog_category = css`
  font-size: 14px;
`;
