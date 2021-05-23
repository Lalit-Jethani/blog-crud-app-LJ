import React from 'react';
import { editPostLoad } from '../redux/actions'
import { useDispatch } from 'react-redux';



const EditPost = (props) => {
    const dispatch = useDispatch();


    const [editForm, setEditForm] = React.useState({
        title: '',
        text: '',
        isEdited: false
    })

    React.useEffect(() => {
        setEditForm({
            title: props.post.title,
            text: props.post.text,
            isEdited: false,
            id: props.post.id
        })
    }, [])

    const handleInputChange = (e) => {
        setEditForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editForm.title.trim() && editForm.text.trim()) {
            dispatch(editPostLoad(editForm))
            // props.onUpdate({id: props.post.id, data: editForm});
            handleReset();
        }
    };

    const handleReset = () => {
        setEditForm({
            title: '',
            text: '',
            isEditing: false
        });
    };

    return (
        <div className="card border-0 rounded-0 shadow">
            <div className="card-body">
                <h5 className="card-title text-center">
                    <span className="title-h5">Editing post</span>
                </h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            required
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            onChange={handleInputChange}
                            defaultValue={props.post.title}
                            className="form-control form-control-lg border border-secondary"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            required
                            rows="3"
                            cols="30"
                            name="text"
                            placeholder="Enter post"
                            onChange={handleInputChange}
                            defaultValue={props.post.text}
                            className="form-control form-control-lg border border-secondary"
                        />
                    </div>
                    <div className="form-group text-center">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn btn-success rounded pl-5 pr-5"
                        >
                            Update
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;
