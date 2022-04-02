import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog1.module.css";

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
export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data= fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  let myblog=await (await data).json()
  return {
    props: {myblog},
  }
}
export default Slug;
