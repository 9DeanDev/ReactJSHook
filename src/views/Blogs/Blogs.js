import { Link } from "react-router-dom";
import useFetch from "../../customize/fetch";
import './Blogs.scss'
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
const Blogs = () => {
    const [show, setShow] = useState(false);
    const handleSave = async () => {
        if (!newtext) {
            alert('miss new text')
            return
        }
        if (!newbody) {
            alert('miss new body')
            return
        }
        // console.log('>>>check newt:', newtext)
        // console.log('>>>check newb:', newbody)
        let data = {
            title: newtext,
            body: newbody,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        // console.log('>>>> res:', res.data)
        let dataNew = newData
        dataNew.unshift(res.data)
        setnewData(dataNew)
        console.log('>>>>', newData)
        setnewtext('')
        setnewbody('')
        setShow(false)
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { Data: DataBlogs, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [newData, setnewData] = useState([])
    useEffect(() => {
        if (DataBlogs && DataBlogs.length > 0) {
            let newDataSimple = DataBlogs.slice(0, 9)
            setnewData(newDataSimple)
        }
    }, DataBlogs)

    const [newtext, setnewtext] = useState('')
    const [newbody, setnewbody] = useState('')
    const handleDelete = async (item) => {
        let res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`)

    }
    return (
        <>
            <Button variant="primary" className="my-4" onClick={handleShow}>
                Add new blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="single-new-blog">
                        <div className="new-title">
                            Title:
                        </div>
                        <input type="text" value={newtext} onChange={(event) => setnewtext(event.target.value)} />
                        <div className="new-body">
                            Body:
                        </div>
                        <input type="text" value={newbody} onChange={(event) => setnewbody(event.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="blogs-container">
                {isError === false && loading === false && newData && newData.length > 0 && newData.map(item => {
                    return (

                        <div className="single-blog">
                            <div className="X"><span className="X" onClick={() => handleDelete(item)}>X</span></div>
                            <div className="title">Title: {item.title} </div>
                            <div className="body">Body: {item.body}</div>
                            <button>
                                <Link to={`/Blogs/${item.id}`}>View details</Link>
                            </button>
                        </div>
                    )
                })}
                {
                    loading === true &&
                    <tr>
                        <td colSpan={5}>Loading...</td>
                    </tr>
                }
                {isError === true &&
                    <tr>
                        <td colSpan={5}>Something wrong</td>
                    </tr>
                }
            </div>
        </>
    )
}
export default Blogs;