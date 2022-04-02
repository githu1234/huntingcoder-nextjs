import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog1.module.css";
import * as fs from 'fs';


const Slug = (props) => {
  const [blog,setBlog]=useState(props.myblog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title} </h1>
        <hr />
        <div>
         {blog && blog.content}
        </div>
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug: 'html'}},
      { params: {slug: 'javascript'}},
      { params: {slug: 'nextjs'} },
      { params: {slug: 'reactjs'} }
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myblog= fs.readFile(`blogdata/${slug}.json`, `utf-8`)
  return {
    props: {myblog:JSON.parse(myblog)}
  }
}
export default Slug;
