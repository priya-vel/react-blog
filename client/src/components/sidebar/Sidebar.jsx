import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT Me</span>
                <img 
                src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
                alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur 
                    asperiores optio vero ratione eos nihil.</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItems">Life</li>
                    <li className="sidebarListItems">Music</li>
                    <li className="sidebarListItems">Style</li>
                    <li className="sidebarListItems">Sport</li>
                    <li className="sidebarListItems">Tech</li>
                    <li className="sidebarListItems">Cinema</li>  
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW Us</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
