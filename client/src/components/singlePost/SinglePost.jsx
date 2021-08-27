import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" className="singlePostimg" />
                <h1 className="singlePostTitleimg">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Priya</b></span>
                    <span className="singlePostDate">1 hour ago</span>

                </div>
                <p className="singlePostDesc">Tempora exercitationem 
                    perspiciatis corrupti magni dolores similique 
                    ipsum quam incidunt. Libero illum eos ab esse
                     nobis voluptatem, provident natus porro recus
                     andae iusto.orem ipsum dolor sit amet consectetur 
                    adipisicing elit.LTempora exercitationem 
                    perspiciatis corrupti magni dolores similique 
                    ipsum quam incidunt. Libero illum eos ab esse
                     nobis voluptatem, provident natus porro recus
                     andae iusto.orem ipsum dolor sit amet consectetur 
                    adipisicing elit. voluptatem, provident natus porro recus
                     andae iusto.orem ipsum dolor sit amet consectetur 
                    adipisicing elit.LTempora exercitationem 
                    perspiciatis corrupti magni dolores similique 
                    ipsum quam incidunt. Libero illum eos ab esse
                     nobis voluptatem, provident natus porro recus
                     andae iusto.orem ipsum dolor sit amet consectetur 
                    adipisicing elit. </p>
                
             
            </div>
        </div>
    )
}
