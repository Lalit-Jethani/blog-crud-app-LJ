import React from 'react'
import { useDispatch } from 'react-redux';
import { CreatePostLoad } from '../redux/actions'

const NewPost = () => {

    const dispatch = useDispatch();


    const [form, setForm] = React.useState({
        title: '',
        text: ''
    })

    const handleInputChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.title.trim() && form.text.trim()) {
            dispatch(CreatePostLoad(form))
            handleReset();
        }
    };

    const handleReset = () => {
        setForm((prev) => ({
            ...prev,
            title: '',
            text: ''
        }))
    };

    return (
        <div className="card border-0 rounded-0 shadow">
            <div className="card-body">
                <h5 className="card-title text-center">
                    <span className="title-h5">Post</span>
                </h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            required
                            type="text"
                            name="title"
                            value={form.title}
                            placeholder="Enter title"
                            onChange={handleInputChange}
                            className="form-control form-control-lg border border-secondary"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            required
                            rows="10"
                            cols="30"
                            name="text"
                            value={form.text}
                            placeholder="Enter post"
                            onChange={handleInputChange}
                            className="form-control form-control-lg border border-secondary"
                        />
                    </div>
                    <div className="form-group text-center">
                        <button
                            type="submit"
                            className="btn btn-primary rounded pl-5 pr-5"
                        >
                            Submit
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;