import React from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export

const BlogList = ({ post }) => {
    const history = useHistory();
    const posts = useSelector(state => state.blogReducer.post)

    const navigateToFullPost = (id) => {
        history.push('/FullPost/' + id);
    }
    return (
        posts.map((post, index) => {
            return <div key = {index} className="card border-0 rounded-0 mt-1 mb-2 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title blog-title cursor-style"
                        onClick={() => navigateToFullPost(post.id)}>
                        {post.title}
                        <small className="text-muted float-right cursor-style">
                            <Moment fromNow>{post.date}</Moment>
                        </small>
                    </h5>
                    <p className="card-text blog-body">
                        {post.text}
                    </p>
                </div>
            </div>
        })
    );
}

export default BlogList