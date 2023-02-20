import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    // eslint-disable-next-line no-undef
    $('#wd-explore').append(`
<!--              <h2>Explore</h2>-->
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
   ${ExploreComponent()}
<!--    <h3>ExploreComponent</h3>-->
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
   ${WhoToFollowList()} 
<!--    <h3>WhoToFollowList </h3>-->
   </div>
  </div>

   `);
}

// eslint-disable-next-line no-undef
$(exploreComponent);




// <div class = "container pt-1">
//     <div class = "row">
//     <div class = "col-2">
//     <ul class="list-group">
//     <li class="list-group-item border-0">
//     <div class="row">
//     <div class="col">
//     <h2 style="font-size: 50px; color: #0066ff; top: 20px">T</h2>
// </div>
// </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-home bottom-50"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Home
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-hashtag"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Explore
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-bell"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Notifications
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-envelope"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Messages
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-bookmark"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Bookmarks
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-list"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Lists
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-list"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Lists
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-user"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             Profile
//         </div>
//     </div>
// </li>
//
// <li class="list-group-item border-0">
//     <div class="row">
//         <div class="col-2">
//             <i class="fas fa-ellipsis-h"></i>
//         </div>
//         <div class="col d-none d-xl-block">
//             More
//         </div>
//     </div>
// </li>
//
// </ul>
//
// <!--      <div class="list-group">-->
// <!--        <a class="list-group-item list-group-item-action border-0">-->
// <!--          <h2 style="font-size: 50px; color: #0066ff; top: 20px">T</h2></a>-->
// <!--        <a href="../home.html" class="list-group-item list-group-item-action border-0">-->
//     <!--            <i class="fas fa-home bottom-50"></i> Home</a>-->
//     <!--        <a href="index.html" class="list-group-item list-group-item-action active border-0">-->
//     <!--          <i class="fas fa-hashtag"></i> Explore</a>-->
//     <!--        <a href="../notifications.html" class="list-group-item list-group-item-action border-0">-->
//     <!--          <i class="fas fa-bell"></i> Notifications</a>-->
//     <!--        <a href="../messages.html" class="list-group-item list-group-item-action border-0">-->
//     <!--          <i class="fas fa-envelope"></i> Messages</a>-->
//     <!--        <a href="../bookmarks.html" class="list-group-item list-group-item-action border-0" tabindex="-1" aria-disabled="true">-->
//     <!--          <i class="fas fa-bookmark"></i> Bookmarks</a>-->
//     <!--        <a href="../lists.html" class="list-group-item list-group-item-action border-0" tabindex="-1" aria-disabled="true">-->
//     <!--          <i class="fas fa-list"></i> Lists</a>-->
//     <!--        <a href="../profile.html" class="list-group-item list-group-item-action border-0" tabindex="-1" aria-disabled="true">-->
//     <!--          <i class="fas fa-user"></i> Profile</a>-->
//     <!--        <a class="list-group-item list-group-item-action border-0" tabindex="-1" aria-disabled="true">-->
//     <!--          <i class="fas fa-ellipsis-h"></i> More</a>-->
//     <!--      </div>-->
//
//     <button class="btn btn-primary w-100 mt-1 rounded-pill">
//         Tuit
//     </button>
//
//
// </div>
//
// <div class = "col-6">
//
//     <div class="row">
//         <div class="col-10">
//             <div class="position-relative">
//                 <input class="ps-5 form-control rounded-pill" type="search" placeholder="Search Tuiter"/>
//                 <style>
//                     input[type=search]{
//                     background-color: #eaeaea;
//                 }
//                 </style>
//                 <i class="fas fa-search position-absolute wd-search-tuiter" ></i>
//             </div>
//         </div>
//
//         <div class="col-2">
//             <i class="fa fa-cog fa-2x"></i>
//
//         </div>
//     </div>
//
//     <ul class="nav nav-pills mt-1">
//         <li class="nav-item">
//             <a class="nav-link active" href="#" style="color: #1a1e21">
//                 <b>For You</b>
//             </a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#" style="color: #5c636a">Trending</a>
//         </li>
//         <li class="nav-item d-none d-md-block">
//             <a class="nav-link" href="#" style="color: #5c636a">News</a>
//         </li>
//         <li class="nav-item d-none d-md-block">
//             <a class="nav-link" href="#" style="color: #5c636a">Sports</a>
//         </li>
//         <li class="nav-item d-none d-lg-block">
//             <a class="nav-link" href="#" style="color: #5c636a">Entertainment</a>
//         </li>
//     </ul>
//
//     <div class="position-relative">
//         <img src="../../images/starship.jpg" width="100%">
//             <h3 class="position-absolute bottom-0 left-0 text-white">Space X's Starship</h3>
//     </div>
//
//     <ul class="list-group">
//         <li class="list-group-item border-0">
//             <div class="row">
//                 <div class="col-9">
//                     <div class="text-secondary">
//                         Web Development
//                     </div>
//
//                     <div class="fw-bolder">
//                         ReactJs <i class="fas fa-check-circle"></i> - 2h
//                     </div>
//
//                     <div class="fw-bolder">
//                         React.js is a component based front end library that makes it very easy to build a Single Page
//                         Application or SPAs
//                     </div>
//
//                 </div>
//                 <div class="col">
//                     <!--              <img class="float-end" src="../../images/react.jpg" height="100px"/>-->
//                     <i class="fas fa-ellipsis-h float-end"></i>
//                 </div>
//             </div>
//
//         </li>
//         <li class="list-group-item border-0">
//             <div class="row">
//                 <div class="col-9">
//                     <div class="fw-bolder">
//                         JavaScript <i class="fas fa-check-circle"></i> - 2h
//                     </div>
//                     <div class="fw-bolder">
//                         JavaScript is programming language that can run on browsers as well as desktops
//                     </div>
//                     <div class="text-secondary">
//                         123K Tweets
//                     </div>
//                 </div>
//                 <div class="col">
//                     <!--              <img class="float-end" src="../../images/js.jpg" height="100px"/>-->
//                     <i class="fas fa-ellipsis-h float-end"></i>
//                 </div>
//             </div>
//         </li>
//         <li class="list-group-item border-0">
//             <div class="row">
//                 <div class="col-9">
//                     <div class="text-secondary">
//                         Web Development
//                     </div>
//                     <div class="fw-bolder">
//                         JavaScript <i class="fas fa-check-circle"></i> - 2h
//                     </div>
//                     <div class="fw-bolder">
//                         jQuery
//                     </div>
//                     <div class="text-secondary">
//                         123K Tweets
//                     </div>
//                 </div>
//                 <div class="col">
//                     <!--              <img class="float-end" src="../../images/jquery.jpg" height="100px"/>-->
//                     <i class="fas fa-ellipsis-h float-end"></i>
//                 </div>
//             </div>
//         </li>
//     </li>
//     <li class="list-group-item border-0">
//         <div class="row">
//             <div class="col-9">
//                 <div class="text-secondary">
//                     Web Development
//                 </div>
//                 <div class="fw-bolder">
//                     NodeJs <i class="fas fa-check-circle"></i> - 2h
//                 </div>
//                 <div class="text-secondary">
//                     123K Tweets
//                 </div>
//             </div>
//             <div class="col">
//                 <!--              <img class="float-end" src="../../images/nodejs.jpg" height="100px"/>-->
//                 <i class="fas fa-ellipsis-h float-end"></i>
//             </div>
//         </div>
//     </li>
// </ul>
// </div>
//
// <!--    <div class = "col-xl col-lg pt-2">-->
// <div class = "col d-none d-lg-block pt-2">
//     <div class="list-group">
//         <a class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="fw-bolder">
//                 Who to follow
//             </div>
//         </a>
//         <a class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="row">
//                 <div class="col-2">
//                     <img class="float-start rounded-pill" src="../../images/java.jpg" height="50px"/>
//                 </div>
//                 <div class="col">
//                     <div class="fw-bolder">
//                         Java <i class="fas fa-check-circle"></i>
//                     </div>
//                     <div class="text-secondary">
//                         @Java
//                     </div>
//                 </div>
//                 <div class="col-4">
//                     <button class="float-end btn btn-primary w-100 mt-1 rounded-pill">
//                         follow
//                     </button>
//                 </div>
//             </div>
//         </a>
//         <a href="index.html" class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="row">
//                 <div class="col-2">
//                     <img class="float-start rounded-pill" src="../../images/space.jpg" height="50px"/>
//                 </div>
//                 <div class="col">
//                     <div class="fw-bolder">
//                         Relativity Space <i class="fas fa-check-circle"></i>
//                     </div>
//                     <div class="text-secondary">
//                         @relativityspace
//                     </div>
//                 </div>
//                 <div class="col-4">
//                     <button class="float-end btn btn-primary w-100 mt-1 rounded-pill">
//                         follow
//                     </button>
//                 </div>
//             </div>
//         </a>
//         <a href="../notifications.html" class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="row">
//                 <div class="col-2">
//                     <img class="float-start rounded-pill" src="../../images/virgin.jpg" height="50px"/>
//                 </div>
//                 <div class="col">
//                     <div class="fw-bolder">
//                         Virgin Galactic <i class="fas fa-check-circle"></i>
//                     </div>
//                     <div class="text-secondary">
//                         @Virginvalactic
//                     </div>
//                 </div>
//                 <div class="col-4">
//                     <button class="float-end btn btn-primary w-100 mt-1 rounded-pill">
//                         follow
//                     </button>
//                 </div>
//             </div>
//         </a>
//         <a href="../messages.html" class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="row">
//                 <div class="col-2">
//                     <img class="float-start rounded-pill" src="../../images/nasa.jpg" height="50px"/>
//                 </div>
//                 <div class="col">
//                     <div class="fw-bolder">
//                         NASA <i class="fas fa-check-circle"></i>
//                     </div>
//                     <div class="text-secondary">
//                         @NASA
//                     </div>
//                 </div>
//                 <div class="col-4">
//                     <button class="float-end btn btn-primary w-100 mt-1 rounded-pill">
//                         follow
//                     </button>
//                 </div>
//             </div>
//         </a>
//         <a href="../bookmarks.html" class="list-group-item list-group-item-action border-0" style="background-color: #eaeaea">
//             <div class="row">
//                 <div class="col-2">
//                     <img class="float-start rounded-pill" src="../../images/tesla.jpg" height="50px"/>
//                 </div>
//                 <div class="col">
//                     <div class="fw-bolder">
//                         Tesla <i class="fas fa-check-circle"></i>
//                     </div>
//                     <div class="text-secondary">
//                         @Tesla
//                     </div>
//                 </div>
//                 <div class="col-4">
//                     <button class="float-end btn btn-primary w-100 mt-1 rounded-pill">
//                         follow
//                     </button>
//                 </div>
//             </div>
//         </a>
//         <a href="../bookmarks.html" class="list-group-item list-group-item-action border-0" style=" color: #0d6efd; background-color: #eaeaea">
//             Show More
//         </a>
//         <div class="pt-2" style="font-size: small;color: #5c636a">
//             Terms of service Privacy Policy Cookie Policy Accessibility Ads info More...
//         </div>
//         <div style="font-size: small; color: #5c636a">
//             © 2023 Tuiter, inc.
//         </div>
//     </div>
// </div>
// </div>
//
// </div>