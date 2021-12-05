import Head from "next/head";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Article from "@/components/Article";
import Footer from "@/components/Footer";

import { posts } from "../posts.js";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Rukhsar Manzoor - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Personal blog by Rukhsar Manzoor." />
        <meta property="og:title" content="rukhsar.dev" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/9365770"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rukhsar Manzoor" />
        <meta
          property="og:description"
          content="Personal blog by Rukhsar Manzoor."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@condino_aj" />
        <meta name="twitter:title" content="rukhsar.dev" />
        <meta
          name="twitter:description"
          content="Personal blog by Rukhsar Manzoor."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/9365770"
        />
      </Head>
      <Container>
        <Header />
        <Aside />
        <Main>
          {posts && posts.length > 0
            ? posts.map((post) => <Article key={post.slug} {...post} />)
            : null}
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { posts },
  };
}
