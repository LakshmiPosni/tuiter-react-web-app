import NavigationSidebar from "../explore/NavigationSidebar";
import PostSummaryList from "../explore/PostSummaryList";
import PostList from "../explore/PostList";

function homeScreen(){
    // eslint-disable-next-line no-undef
    $('#wd-home').append(`
<!--              <h2>Explore</h2>-->
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--    <h3>Home Page</h3>-->
    ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--    <h3>Post Summarty </h3>-->
    ${PostSummaryList()}
   </div>
  </div>

   `);
}

// eslint-disable-next-line no-undef
$(homeScreen);
//
//
