module.exports = `import React from 'react';
import {connect} from 'react-redux';

const Header = (props) => {

  function renderAuth(){
    switch (props.auth){
      case null:
        return;
      case false:
        return (<a href="/auth/google">Login</a>);
      default:
        return (<a href="/api/logout">Logout</a>);
    }
  }

  return (
    <header>{renderAuth()}</header>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);`