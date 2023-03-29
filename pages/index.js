import 'dayjs/locale/ja';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Blogs } from '../components/Blogs';
import { getQiitaPosts } from '../libs/qiita';
import { client } from '../libs/client';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  calcMaxPage,
  decrement,
  increment,
  initBlogs,
  filterBlogs,
  toggleCategory,
} from '../features/blogs/blogsSlice';

export default function Home({ techblog, qiita }) {
  const { pages, displayedBlogs, maxPage } = useSelector(
    (state) => state.blogs
  );
  const dispatch = useDispatch();
  const mergedBlogs = [...techblog, ...qiita];
  const [category, setCategory] = useState('all');
  const onChange = (e, selectedCategory) => {
    setCategory(selectedCategory);
  };
  useEffect(() => {
    dispatch(initBlogs(mergedBlogs));
    dispatch(calcMaxPage());
  }, []);
  return (
    <>
      <Header />
      <Layout>
        <div css={tabBtnWrapper}>
          <ToggleButtonGroup
            size="large"
            value={category}
            onChange={onChange}
            exclusive
          >
            <ToggleButton
              value="all"
              onClick={() => {
                dispatch(toggleCategory('all'));
                dispatch(filterBlogs());
                dispatch(calcMaxPage());
              }}
            >
              All
            </ToggleButton>
            <ToggleButton
              value="qiita"
              onClick={() => {
                dispatch(toggleCategory('qiita'));
                dispatch(filterBlogs());
                dispatch(calcMaxPage());
              }}
            >
              Qiita
            </ToggleButton>
            <ToggleButton
              value="techblog"
              onClick={() => {
                dispatch(toggleCategory('techblog'));
                dispatch(filterBlogs());
                dispatch(calcMaxPage());
              }}
            >
              Techblog
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Blogs blogs={displayedBlogs} />
        <div css={buttonWrapper}>
          <Button onClick={() => dispatch(decrement())}>Prev</Button>
          <p css={pageCss}>
            {pages + 1}/{maxPage}
          </p>
          <Button onClick={() => dispatch(increment())}>Next</Button>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const qiita = await getQiitaPosts();
  return {
    props: {
      techblog: data.contents,
      qiita: qiita,
    },
  };
};

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
`;

const pageCss = css`
  padding-top: 5px;
`;

const tabBtnWrapper = css`
  display: flex;
  justify-content: flex-end;
  max-width: 900px;
  margin: 0 auto;
`;
