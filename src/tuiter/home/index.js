import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList />
        </>
    );
};
export default HomeComponent;



// import React from "react";
// import postObjects from './post-objects.json';
// import PostItem  from "./post-item";
//
//
// const HomePostsList = () => {
//     return(
//         <div>
//             {postObjects.map(post => <PostItem key={post._id} item={post}/>)}
//         </div>
//     );
// };
//
// export default HomePostsList;