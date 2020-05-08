import {addMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = state => ({
    messagesPage: state.messagesPage
});
export default compose(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(Dialogs);
