import Card from "../components/Card"
import {posts} from "../data"

export default function home() {
  return (
    <div className="cards">
      {posts.slice(0,3).map(post => 
        <Card key={post.id} post={post}/>)}
    </div>
  )
}
