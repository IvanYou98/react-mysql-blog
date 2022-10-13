import React from 'react'

import hljs from 'highlight.js'
import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from "moment"
import axios from 'axios'

hljs.configure({
    languages: ['javascript', 'python', 'java'],
})

const modules = {
    syntax: {
        highlight: text => hljs.highlightAuto(text).value,
    },
    toolbar: [
        [{ font: [] }],
        [{ header: [] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['code-block'],
    ],
    clipboard: {
        matchVisual: false,
    },
}



const Write = ({ props }) => {
    const navigate = useNavigate();
    const state = useLocation().state;
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [photo, setPhoto] = useState();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", photo);
            const res = await axios.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };



    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                    title,
                    desc: content,
                    img: photo ? imgUrl : "",
                })
                : await axios.post(`/posts/`, {
                    title,
                    desc: content,
                    img: photo ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className='create-post'>
            <div className='content'>
                <input type="text"
                    placeholder='Title'
                    onChange={e => setTitle(e.target.value)}
                />
                <div className='editor-container'>
                    <ReactQuill
                        className='editor'
                        value={content}
                        onChange={setContent}
                        theme="snow"
                        modules={modules}
                    />
                </div>
            </div>
            <div className='menu'>
                <div className='item'>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility:</b> Public
                    </span>
                    <input
                        style={{ display: 'none' }}
                        id="file-picker"
                        onChange={e => setPhoto(e.target.files[0])}
                        type="file" />
                    <label for="file-picker" className='file'>
                        Upload Image
                    </label>
                    <div className='buttons'>
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className='item'>
                    <h1>Category</h1>
                    <div className='cat'>
                        <input type="radio" value="dev" id="dev-radio" />
                        <label htmlFor="dev-radio">Front End</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" value="algo" id="algo-radio" />
                        <label htmlFor="algo-radio">Back End</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" value="algo" id="algo-radio" />
                        <label htmlFor="algo-radio">Algo</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" value="algo" id="algo-radio" />
                        <label htmlFor="algo-radio">Algo</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" value="algo" id="algo-radio" />
                        <label htmlFor="algo-radio">Algo</label>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default Write;