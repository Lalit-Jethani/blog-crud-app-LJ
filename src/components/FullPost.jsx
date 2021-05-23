import React from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostLoad, editSelected, fetchSinglePost } from '../redux/actions'
import { useHistory, withRouter } from 'react-router-dom';
import EditPost from '../components/EditPost';


// eslint-disable-next-line import/no-anonymous-default-export
const FullPost = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const post = useSelector(state => state.blogReducer.singlePost)

    const postID = props.match ? props.match.params.id : -1;

    React.useEffect(() => {
        dispatch(fetchSinglePost(postID))
    }, [])


    return (
        post.isEdited ? <EditPost
            post={post}
        /> :
            <div className="card border-0 rounded-0 mt-1 mb-2 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title ">
                        {post.title}
                        <small className="text-muted float-right">
                            {<Moment fromNow>{post.date}</Moment>}
                        </small>
                    </h5>
                    <p className="card-text blog-body-details ">
                        {post.text}
                    </p>
                    <div className="float-right">
                        <button
                            type="button"
                            onClick={() => dispatch(editSelected(post.id))}
                            className="btn btn-info rounded pr-3 pl-3 mr-1"
                        >
                            Edit
                    </button>
                        <button
                            type="button"
                            onClick={() => {
                                dispatch(deletePostLoad(post.id));
                                history.push('/');
                            }}
                            className="btn btn-danger rounded pr-3 pl-3"
                        >
                            Delete
                    </button>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(FullPost);