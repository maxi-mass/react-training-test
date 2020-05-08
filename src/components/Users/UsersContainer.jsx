import {requestUsers, follow, unFollow} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersSuperSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.requestUsers({
            currentPage: this.props.currentPage,
            pageSize: this.props.pageSize
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsers({
            currentPage: pageNumber,
            pageSize: this.props.pageSize
        });
    };

    render = () => <>
        <Preloader isFetching={this.props.isFetching} />
        <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
        />
    </>
}

const mapStateToProps = state => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    connect(mapStateToProps, {follow, unFollow, requestUsers}),
    WithAuthRedirect
)(UsersContainer);