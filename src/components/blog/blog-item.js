import React from 'react';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url,
    } = props.blogItem;

    return (
        <div className="blog-item">
            <h1>{title}</h1>
            {/* <img src={featured_image_url} /> */}
            <div className="content">{content}</div>
        </div>
    );
} 

export default BlogItem;