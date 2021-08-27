import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
             className="postImg"
            src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, fugit esse quae, eaque voluptatibus, minima error doloribus obcaecati sed blanditiis. Recusandae culpa provident
                 aut minus harum earum quae doloribus.lorem  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, fugit esse quae, eaque voluptatibus, minima error doloribus obcaecati sed blanditiis. Recusandae culpa provident
                 aut minus harum earum quae doloribus.lorem
            </p>
         </div>
    )
}
