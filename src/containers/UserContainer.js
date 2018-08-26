import { User } from '../components/User';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class UserContainer extends React.Component {
  render() {
    return (
      <User
        name={this.props.user.name}
        error={this.props.userError}
        isFetching={this.props.userFetching}
        login={this.props.login}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    userFetching: store.user.isFetching,
    userError: store.user.error
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
