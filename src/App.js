
import './App.css';
import React from 'react'
import { fetchPostLoad } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import FallBack from './FallBack';
import NewPost from '../src/components/NewPost';
import Post from '../src/components/Post'


function App() {
  const dispatch = useDispatch();
  const isError = useSelector(state => state.blogReducer.isError)
  const isLoading = useSelector(state => state.blogReducer.isLoading)
  const isRefreshed = useSelector(state => state.blogReducer.isRefreshed)

React.useEffect(() => {
    dispatch(fetchPostLoad())
  }, [isRefreshed])

  if (isError) {
    return <FallBack />
  }
  return (



    <div className="App">

      {isLoading ? <div id='loader'></div> : <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4 ">
            <NewPost />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
