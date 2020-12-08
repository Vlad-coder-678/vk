import Login from "./Login";
import React from "react";
import Preloader from "../Preloader/Preloader";
import { connect } from "react-redux";

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Login props={this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {})(LoginContainer);
