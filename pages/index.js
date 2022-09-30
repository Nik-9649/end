import Head from "next/head";
import ArticleList from "../components/Article_list";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>melatonin</title>
        <meta name="keywords" content="NextJs, ReactJs" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
