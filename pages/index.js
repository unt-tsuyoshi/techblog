// pages/index.js
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import dayjs, { locale, extend } from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function Home({ blog }) {
  return (
    <>
      <ul css={list}>
        {blog.map((blog) => (
          <li key={blog.id} css={list_item}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <p>{calcDateDiff(blog.publishedAt)}</p>
          </li>
        ))}
      </ul>
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
  extend(utc);
  extend(timezone);
  extend(relativeTime);

  const formatedDate = dayjs
    .utc(publishedDate)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');
  const datediff = dayjs(formatedDate).fromNow();
  return datediff;
};

const list = css`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`;

const list_item = css`
  padding: 30px;
  background-color: red;
`;
