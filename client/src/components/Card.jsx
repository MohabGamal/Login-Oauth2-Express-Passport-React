import { Link } from 'react-router-dom';

function Card({post}) {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="cardTitle">{post.title}</span>
        <img src={post.img} alt="a" className="cardImg"/>
        <p className="cardDesc">{post.desc}</p>
        <button className="cardButton">Read more</button>
      </Link>
    </div>
  )
}

export default Card