import Link from 'next/link';
import { client } from '../../libs/client';
import { css } from '@emotion/react';
import { breakpointUp, breakpoints } from '../../styles/mq';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

export default function BlogId({ blog }) {
  useEffect(() => {
    hljs.highlightAll();
    hljs.addPlugin({
      'after:highlightElement': ({ el, result }) => {
        el.innerHTML = result.value.replace(
          /^/gm,
          '<span class="row-number"></span>'
        );
      },
    });
  });
  return (
    <>
      <Header />
      <Layout>
        <main css={blog_content}>
          <h1 css={blog_title}>{blog.title}</h1>
          <p css={blog_date}>公開日:{formatDate(blog.publishedAt)}</p>
          <div
            css={blog_post}
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
          <div css={blog_btn}>
            <Link href={'/'}>
              <a css={blog_link}>一覧に戻る</a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

//フォーマットした日付を返す
const formatDate = (originalDate) => {
  const formatedDate = dayjs(originalDate).format('YYYY/MM/DD');
  return formatedDate;
};

//css
const blog_title = css`
  font-size: 30px;
  font-weight: bold;
`;

const blog_date = css`
  font-size: 12px;
  text-align: right;
  margin-top: 18px;
`;

const blog_post = css`
  & > h2 {
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #707070;
    padding-bottom: 8px;
    margin-top: 50px;
  }

  & > h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }

  & > p {
    font-size: 16px;
    line-height: 1.5;
  }

  & > h2 + p,
  & > h2 + pre {
    margin-top: 1.5em;
  }

  & > pre {
    counter-reset: lineNum;
    margin: 1em 0;
    font-size: 16px;
  }

  & > img {
    margin: 1em 0;
  }

  & > pre span.row-number {
    display: inline-flex;
    justify-content: end;
    width: 2em;
    margin-right: 1em;
    padding-right: 1em;
    border-right: 1px solid #abb2bf;
  }

  & > pre span.row-number::before {
    counter-increment: lineNum;
    content: counter(lineNum);
  }

  & > blockquote {
    margin-block: 1em;
    padding-left: 1em;
    border-left: 3px solid #707070;
  }

  a {
    color: #707070;
    padding-bottom: 3px;
    border-bottom: 1px solid #707070;
    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const blog_content = css`
  max-width: 900px;
  margin: 0 auto;
`;

const blog_btn = css`
  margin-top: 40px;
`;

const blog_link = css`
  cursor: pointer;
  border-bottom: 1px solid #333;
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;
