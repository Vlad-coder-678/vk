import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {
  getUserProfileTC,
  getStatusTC,
  updateStatusTC,
} from "../../redux/profile-reducer.js";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12867;
    }
    this.props.getUserProfileTC(userId);
    this.props.getStatusTC(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusTC}
      />
    );
  } 
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileTC,
    getStatusTC,
    updateStatusTC,
  }),
  withRouter
)(ProfileContainer);
