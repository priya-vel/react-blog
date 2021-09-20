import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=> {
        const getCats = async ()=> {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, [])
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

                    {cats.map((c)=> (
                        <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItems">{c.name}</li></Link>
                        
                    ))}
                    
                    
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
