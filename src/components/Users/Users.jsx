import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return (
        <div>
            <div><Paginator
                currentPage = {props.currentPage}
                totalCount = {props.totalUsersCount}
                pageSize = {props.pageSize}
                onPageChanged = {props.onPageChanged}
            /></div>
            {
                props.users.map(user =>
                    <User key={user.id}
                          user={user}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unFollow={props.unFollow}
                    />
                )
            }
        </div>
    );
};

export default Users;