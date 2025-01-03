import {posts} from "../data"
import { useLocation } from "react-router-dom"

function Post() {

  const location = useLocation()
  //                      /post/0
  const postId = location.pathname.split('/')[2]
  // JS implement type conversion from "0" to 0
  const post = posts[postId]

  return (
    <div className='post'>
        <img src={post.img} alt="a" className='postImg'/>
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}

export default Post