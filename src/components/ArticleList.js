import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    const posts = blogData.posts
    const article = posts.map((post)=>(
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview= {post.date}
            minutes={posts.date}
        
        />
    ))
    return <main>{article}</main>
}
export default ArticleList;