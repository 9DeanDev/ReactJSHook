import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../customize/fetch";
import './Blogs.scss'

const Blogdetails = () => {
    let { id } = useParams()
    let Navigate = useNavigate()
    const handleClickBack = () => {
        Navigate('/Blogs')
    }
    const { Data: DataBlogdetails, loading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return (
        <div className="blogs-container">
            {isError === false && loading === false && DataBlogdetails &&
                <>
                    <div className="single-blog">
                        <div>Id: {DataBlogdetails.id}</div>
                        <div className="title">Title: {DataBlogdetails.title}</div>
                        <div className="body">Body: {DataBlogdetails.body}</div>
                        <button onClick={() => handleClickBack()}>BACK</button>
                    </div>
                </>
            }
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
    )
}
export default Blogdetails;