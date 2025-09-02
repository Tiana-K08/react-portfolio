import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogItem from '../blog/blog-item';

class Blog extends React.Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0
        };

        // this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll = this.activateInfiniteScroll.bind(this);
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            console.log("window.innerHeight", window.innerHeight);
            console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);
            console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight);
            
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
            console.log("Get more posts");
            }
        };

        
    }

    getBlogItems() {
        this.setState({ currentPage: this.state.currentPage + 1 });

        axios.get('https://tetkononenko.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogItems: response.data.portfolio_blogs,
                    totalCount: response.data.meta.total_records
                });
            })
            .catch(error => {
                console.log("getBlogItems error", error);
            });
    }
    // componentWillMount() устарел и больше не рекомендуется к использованию,
    // используйте componentDidMount()
    componentWillMount() {
        this.getBlogItems();
        this.activateInfiniteScroll();
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return (
                <BlogItem key={blogItem.id} blogItem={blogItem} />
            );
        });

        return (
            <div className="blog-container">
                <div className="content-container">
                    {blogRecords}
                </div>
            </div>
        );
    } 
}

export default Blog;