import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  render() {
    console.log('User rendered');
    const { name, error, isFetching, login } = this.props;
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }
    if (isFetching) {
      return <p>Загружаю данные</p>;
    }

    return name ? (
      <p>Привет, {name}</p>
    ) : (
      <button className="btn" onClick={login}>
        Login
      </button>
    );
  }
}

User.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired
};
