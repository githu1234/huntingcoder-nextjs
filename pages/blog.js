import React,{useEffect,useState} from "react";
import styles from "../styles/Blog.module.css";
import Link from 'next/link';



const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allblogs);
//  useEffect(()=>{
//    fetch('http://localhost:3000/api/blogs').then((a)=>{
//      return a.json();})
//      .then((parsed)=>{
//        setblogs(parsed)

//      })
//    }, [])
 

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`} passHref>
             <a><h1 className={styles.blogitemh1}>{blogitem.title}</h1></a>
            </Link>
            <h2 className={styles.blogitem}>{blogitem.content.substr(0,140)}...</h2>

          </div>
        })}
        
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  let data=  fetch('http://localhost:3000/api/blogs')
  let allblogs=await (await data).json()
  return {
    props: {allblogs},
  }
}

export default Blog;
