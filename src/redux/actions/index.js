/**
 * @param  {} successData
 * @param  {} dispatch
 * @param  {'FETCH_POST_SUCCESS'} =>{dispatch(({type
 * @param  {successData.data}} payload
 * @returns id
 */

import {SERVICE_URL} from '../../constants/constants';
import axios from 'axios';
 /**
  * @param  {} successData
  * @param  {} dispatch
  * @param  {'FETCH_POST_SUCCESS'} =>{dispatch(({type
  * @param  {successData.data}} payload
  */
 export const fetchPostSuccess = (successData, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'FETCH_POST_SUCCESS',
        payload : successData.data
        } ))
}
/**
 * @param  {} error
 * @param  {} dispatch
 * @param  {'FETCH_POST_ERROR'} =>{dispatch(({type
 * @param  {error}} payload
 */
export const fetchPostFail = (error, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'FETCH_POST_ERROR',
        payload : error
        } ))
}
/**
 * @param  {} isLoading
 * @param  {} =>{returnasyncfunction(dispatch
 * @param  {'DATA_LOADING'} {dispatch({type
 * @param  {isLoading}} payload
 */
export const DataLoading = (isLoading) => {
    return async function(dispatch) {
        dispatch( {
            type : 'DATA_LOADING',
            payload : isLoading
            } )
 }
}
 /**
  * @param  {} =>{returnasyncfunction(dispatch
  * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
  * @param  {} ;axios.get(`${SERVICE_URL}${SUFFIX_URL}`
  * @param  {} .then((successData
  * @param  {} =>{fetchPostSuccess(successData
  * @param  {} dispatch
  * @param  {} ;}
  * @param  {} .catch((error
  * @param  {} =>{fetchPostFail(error
  * @param  {} dispatch
  * @param  {} ;}
  */
 export const fetchPostLoad = () => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.get(`${SERVICE_URL}${SUFFIX_URL}`).then((successData)=>{
        fetchPostSuccess(successData, dispatch);
    })
    .catch((error)=>{
        fetchPostFail(error, dispatch);
    });
    }
 }
 /**
  * @param  {} successData
  * @param  {} dispatch
  * @param  {'CREATE_POST_SUCCESS'} =>{dispatch(({type
  * @param  {successData.data}} payload
  */
 export const createPostSucess = (successData, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'CREATE_POST_SUCCESS',
        payload : successData.data
        } ))
}
/**
 * @param  {} error
 * @param  {} dispatch
 * @param  {'CREATE_POST_ERROR'} =>{dispatch(({type
 * @param  {error}} payload
 */
export const CreatePostFail = (error, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'CREATE_POST_ERROR',
        payload : error
        } ))
}

 /**
  * @param  {} body
  * @param  {} =>{returnasyncfunction(dispatch
  * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
  * @param  {} ;axios.post(`${SERVICE_URL}${SUFFIX_URL}`
  * @param  {} body
  * @param  {} .then((successData
  * @param  {} =>{createPostSucess(successData
  * @param  {} dispatch
  * @param  {} ;}
  * @param  {} .catch((error
  * @param  {} =>{CreatePostFail(error
  * @param  {} dispatch
  * @param  {} ;}
  */
 export const CreatePostLoad = (body) => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.post(`${SERVICE_URL}${SUFFIX_URL}`, body).then((successData)=>{
        createPostSucess(successData, dispatch);
    })
    .catch((error)=>{
        CreatePostFail(error, dispatch);
    });
    }
 }
 /**
  * @param  {} error
  * @param  {} dispatch
  * @param  {'DELETE_POST_ERROR'} =>{dispatch(({type
  * @param  {error}} payload
  */
 export const DeletePostFail = (error, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'DELETE_POST_ERROR',
        payload : error
        } ))
}
/**
 * @param  {} successData
 * @param  {} dispatch
 * @param  {'DELETE_POST_SUCCESS'} =>{dispatch(({type
 * @param  {successData.data}} payload
 */
export const deletePostSuccess = (successData, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'DELETE_POST_SUCCESS',
        payload : successData.data
        } ))
}
/**
 * @param  {} id
 * @param  {} =>{returnasyncfunction(dispatch
 * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
 * @param  {} ;axios.delete(`${SERVICE_URL}${SUFFIX_URL}/${id}`
 * @param  {} .then((successData
 * @param  {} =>{deletePostSuccess(successData
 * @param  {} dispatch
 * @param  {} ;}
 * @param  {} .catch((error
 * @param  {} =>{DeletePostFail(error
 * @param  {} dispatch
 * @param  {} ;}
 */

 export const deletePostLoad = (id) => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.delete(`${SERVICE_URL}${SUFFIX_URL}/${id}`).then((successData)=>{
        deletePostSuccess(successData, dispatch);
    })
    .catch((error)=>{
        DeletePostFail(error, dispatch);
    });
    }
 }
 
 /**
  * @param  {} error
  * @param  {} dispatch
  * @param  {'EDIT_POST_ERROR'} =>{dispatch(({type
  * @param  {error}} payload
  */
 export const editPostFail = (error, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'EDIT_POST_ERROR',
        payload : error
        } ))
}

/**
 * @param  {} successData
 * @param  {} dispatch
 * @param  {'EDIT_POST_SUCCESS'} =>{dispatch(({type
 * @param  {successData.data}} payload
 */
export const editPostSucess = (successData, dispatch) => {
    //this.fetchPostLoading(false);
    dispatch(( {
        type : 'EDIT_POST_SUCCESS',
        payload : successData.data
        } ))
}
/**
 * @param  {} successData
 * @param  {} dispatch
 * @param  {'DELETE_ALL_POST_SUCCESS'} =>{dispatch(({type
 * @param  {successData.data}} payload
 */
export const deleteAllPostsSuccess = (successData, dispatch) => {

    dispatch(( {
        type : 'DELETE_ALL_POST_SUCCESS',
        payload : successData.data
        } ))
}
/**
 * @param  {} successData
 * @param  {} dispatch
 * @param  {'FETCH_SINGLE_POST_SUCCESS'} =>{dispatch(({type
 * @param  {successData.data}} payload
 */
export const fetchSinglePostSucess = (successData, dispatch) => {
    dispatch(( {
        type : 'FETCH_SINGLE_POST_SUCCESS',
        payload : successData.data
        } ))
}

 /**
  * @param  {} data
  * @param  {} =>{returnasyncfunction(dispatch
  * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
  * @param  {} ;axios.post(`${SERVICE_URL}${SUFFIX_URL}/${data.id}`
  * @param  {} data
  * @param  {} .then((successData
  * @param  {} =>{fetchSinglePostSucess(successData
  * @param  {} dispatch
  * @param  {} ;}
  * @param  {} .catch((error
  * @param  {} =>{editPostFail(error
  * @param  {} dispatch
  * @param  {} ;}
  */
 export const editPostLoad = (data) => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.post(`${SERVICE_URL}${SUFFIX_URL}/${data.id}`, data).then((successData)=>{
        fetchSinglePostSucess(successData, dispatch);
    })
    .catch((error)=>{
        editPostFail(error, dispatch);
    });
    }
 }
 /**
  * @param  {} id
  * @param  {} =>{returnasyncfunction(dispatch
  * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
  * @param  {} ;axios.get(`${SERVICE_URL}${SUFFIX_URL}/${id}`
  * @param  {} .then((successData
  * @param  {} =>{fetchSinglePostSucess(successData
  * @param  {} dispatch
  * @param  {} ;}
  * @param  {} .catch((error
  * @param  {} =>{editPostFail(error
  * @param  {} dispatch
  * @param  {} ;}
  */
 export const fetchSinglePost = (id) => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.get(`${SERVICE_URL}${SUFFIX_URL}/${id}`).then((successData)=>{
        fetchSinglePostSucess(successData, dispatch);
    })
    .catch((error)=>{
        editPostFail(error, dispatch);
    });
    }
 }
 /**
  * @param  {} id
  * @param  {} =>{returnasyncfunction(dispatch
  * @param  {} {constSUFFIX_URL='blogs/api';dispatch(DataLoading(true
  * @param  {} ;axios.delete(`${SERVICE_URL}${SUFFIX_URL}`
  * @param  {} .then((successData
  * @param  {} =>{deleteAllPostsSuccess(successData
  * @param  {} dispatch
  * @param  {} ;}
  * @param  {} .catch((error
  * @param  {} =>{editPostFail(error
  * @param  {} dispatch
  * @param  {} ;}
  */
 export const deleteAllPosts = (id) => {
    return async function(dispatch) {
    const SUFFIX_URL = 'blogs/api';
    dispatch(DataLoading(true));
    axios.delete(`${SERVICE_URL}${SUFFIX_URL}`).then((successData)=>{
        deleteAllPostsSuccess(successData, dispatch);
    })
    .catch((error)=>{
        editPostFail(error, dispatch);
    });
    }
 }
 /**
  * @param  {} id
  * @param  {"EDIT_SELECTED"} =>{return{type
  * @param  {id}}} payload
  * @returns id
  */
 export const editSelected = (id) => {
     return {
         type:"EDIT_SELECTED",
         payload:id
     }
 }
 

 