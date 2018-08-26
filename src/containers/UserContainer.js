import { User } from '../components/User';
import React from 'react';
import { connect } from 'react-redux';
import { fakeAction, login } from '../actions/userActions';

class UserContainer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fakeAction}>Fake action</button>
        <User
          name={this.props.user}
          error={this.props.userError}
          isFetching={this.props.userFetching}
          login={this.props.login}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user.name,
    userFetching: store.user.isFetching,
    userError: store.user.error
  };
};

const mapDispatchToProps = {
  login,
  fakeAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
