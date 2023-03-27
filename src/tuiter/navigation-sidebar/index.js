import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <>
            <div className="list-group mb-2">
                <span className="list-group-item">
                    <h1>T</h1>
                </span>
                <Link to="/tuiter/" className={`list-group-item list-group-item-action ${active === '' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHome}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHashtag}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Explore</span>
                </Link>
                <Link to="/tuiter/notifications" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faBell}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Notifications</span>
                </Link>
                <Link to="/tuiter/messages" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faEnvelope}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faBookmark}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faList}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Lists</span>
                </Link>
                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faUser}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">Profile</span>
                </Link>
                <Link to="/tuiter/more" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faEllipsis}  className="me-2"/>
                    <span className="d-none d-xl-inline d-xxl-inline">More</span>
                </Link>
            </div>
            <button className="btn rounded-pill bg-primary text-white w-100">Tuit</button>
        </>
    )
};
export default NavigationSidebar;


// import React from "react";
//
// import {Link} from "react-router-dom";
// import {useLocation} from "react-router";
//
// const NavigationSidebar = () => {
//     const {pathname} = useLocation();
//     const paths = pathname.split('/')
//     const active = paths[2];
//     return (
//         <div className="list-group">
//             <a className="list-group-item">Tuiter</a>
//             <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
//                 Home
//             </Link>
//             <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
//                 Explore
//             </Link>
//             <Link to="/" className="list-group-item">
//                 Labs
//             </Link>
//
//             <a className={`list-group-item
//                     ${active === 'notifications'?'active':''}`}>
//                 Notifications
//             </a>
//             <a className={`list-group-item
//                     ${active === 'messages'?'active':''}`}>
//                 Messages
//             </a>
//             <a className={`list-group-item
//                     ${active === 'bookmarks'?'active':''}`}>
//                 Bookmarks
//             </a>
//             <a className={`list-group-item
//                     ${active === 'lists'?'active':''}`}>
//                 Lists
//             </a>
//             <a className={`list-group-item
//                     ${active === 'profile'?'active':''}`}>
//                 Profile
//             </a>
//             <a className={`list-group-item
//                     ${active === 'more'?'active':''}`}>
//                 More
//             </a>
//         </div>
//     );
// };
// export default NavigationSidebar;