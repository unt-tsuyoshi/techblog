// pages/index.js
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';

export default function Home({ blog }) {
  return (
    <div>
      <ul css={list}>
        {blog.map((blog) => (
          <li key={blog.id} css={list_item}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
