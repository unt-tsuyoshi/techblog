// pages/index.js
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import dayjs, { locale, extend } from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';
import { breakpointUp } from '../styles/mq';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

export default function Home({ blog }) {
  return (
    <>
      <Header />
      <Layout>
        <ul css={list}>
          {blog.map((blog) => (
            <li key={blog.id} css={list_item}>
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <div css={list_item_inner}>
                    <h2 css={blog_title}>{blog.title}</h2>
                    <div css={blog_info}>
                      <p css={blog_category}>techblog</p>
                      <p css={blog_publishDate}>
                        {calcDateDiff(blog.publishedAt)}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};

//公開日と現在の日付の差分を計算
const calcDateDiff = (publishedDate) => {
  locale('ja');
  extend(relativeTime);
  const datediff = dayjs(publishedDate).fromNow();
  return datediff;
};

//css props
const list = css`
  max-width: 1280px;
  margin: 0 auto;
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
    width: calc((100% - 80px) / 3);
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
