import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render = () => <Header {...this.props} />;
}
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), mapDispatchToProps)(HeaderContainer);
