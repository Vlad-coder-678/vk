import { connect } from "react-redux";
import {
  setCurrentPageAC,
  getUsersTC,
  followTC,
  unfollowTC,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../Preloader/Preloader.jsx";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          isFollowingProgress={this.props.isFollowingProgress}
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPageAC,
    getUsersTC,
    followTC,
    unfollowTC,
  }),
  withAuthRedirect
)(UsersContainer);
