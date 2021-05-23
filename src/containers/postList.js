import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import EditPost from '../components/EditPost';
import FullPost from '../components/FullPost';
import { useSelector } from 'react-redux';

function PostList(props) {
    const postID = props.match ? props.match.params.id : -1;
    const singlePost = useSelector(state => state.blogReducer.singlePost)
    if (postID) {
        return (
            <div>
                { singlePost.isEdited ?
                    <EditPost
                        post={singlePost}
                    /> :
                    <FullPost />
                }

            </div>
        );
    }
    else {
        return <div>loading</div>
    }
}

export default withRouter(PostList);