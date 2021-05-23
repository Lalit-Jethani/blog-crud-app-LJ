import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteAllPosts } from '../redux/actions'

function DeleteAllPosts() {

    const dispatch = useDispatch();
    const handleDeleteAllPosts = () => {
        dispatch(deleteAllPosts());
    }
    return (
        <Link to="" onClick={handleDeleteAllPosts} className='nav-link cursor-style '>Delete All Posts</Link>
    )
}

export default DeleteAllPosts;