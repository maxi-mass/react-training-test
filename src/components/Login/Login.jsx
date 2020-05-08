import React from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {TextInput} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import formsControlsStyles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        placeholder={"Login"}
                        name={"login"}
                        component={TextInput}
                        validate={required}
                    />
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        component={TextInput}
                        validate={required}
                    />
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={"input"} /> remember me
                </div>
                {error && <div className={formsControlsStyles.commonError}>
                    ERROR
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        
        props.login({
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = dispatch => ({
    login: loginData => dispatch(login(loginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);