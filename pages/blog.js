import React,{useEffect,useState} from "react";
import styles from "../styles/Blog.module.css";
import Link from 'next/link';
import * as fs from 'fs';;




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




export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata');
    let myfile;
    let allblogs = [];
    for (let index = 0; index<data.length; index++) {
        const item = data[index];
        myfile=await fs.promises.readFile(('blogdata/' + item),'utf-8')
        allblogs.push(JSON.parse(myfile))
        
    }
  return {
    props: {allblogs},
  }
}

export default Blog;
