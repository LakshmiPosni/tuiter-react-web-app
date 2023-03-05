import React from "react";
import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList
    from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list/index.js";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import ExploreComponent from "./explore";

function Tuiter() {
    return (

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>



    )
}
export default Tuiter


// <div className="row mt-2">
//     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
//     <NavigationSidebar active="explore"/>
//     </div>
// <div className="col-10 col-md-10 col-lg-7 col-xl-6"
//      style={{"position": "relative"}}>
//     <ExploreComponent/>
// </div>
// <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     <WhoToFollowList/>
// </div>
// </div>


// {/*<div>*/}
// {/*    <Nav/>*/}
// {/*    <NavigationSidebar active="home"/>*/}
// {/*    <WhoToFollowList/>*/}
// {/*    <PostSummaryList/>*/}
// {/*    /!*<WhoToFollowListItem who={{*!/*/}
// {/*    /!*    userName: 'NASA', handle: 'NASA',*!/*/}
// {/*    /!*    avatarIcon: 'nasa.png',*!/*/}
// {/*    /!*}}/>*!/*/}
// {/*    /!*<WhoToFollowListItem who={{*!/*/}
// {/*    /!*    userName: 'Tesla', handle: 'tesla',*!/*/}
// {/*    /!*    avatarIcon: 'tesla.png',*!/*/}
// {/*    /!*}}/>*!/*/}
// {/*    /!*<WhoToFollowListItem who={{*!/*/}
// {/*    /!*    userName: 'SpaceX', handle: 'SpaceX',*!/*/}
// {/*    /!*    avatarIcon: 'spacex.png',*!/*/}
// {/*    /!*}}/>*!/*/}
//
//
// {/*    <h1>Tuiter</h1>*/}
// {/*</div>*/}