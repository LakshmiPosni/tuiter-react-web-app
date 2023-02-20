const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row d-flex align-items-center">
            <div class="col-2">
                <img src="${who.avatarIcon}"
                    class="rounded-circle" width="50px">
            </div>
            <div class="col-6 text-nowrap">
                <div class="col-12">
                    <b>${who.userName}</b> <i class="fa fa-check-circle"></i>
                </div>
                <div class="col-12">
                    ${who.handle}
                </div>
            </div>
            <div class="col-4">
                <button class="btn rounded-pill bg-primary text-white float-end">Follow</button>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;