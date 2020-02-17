import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '930961550071-hlj16kdmk6ei4nnravqq6qc2bmq205sc.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    signInClick = () => {
        this.auth.signIn();
    }

    signOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton (){

        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return (
                <button onClick={this.signOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign out
                </button>
            );
        } else {
            return(
                <button onClick={this.signInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign in with Google
                </button>
            );
        }

    }

    render() {

        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );

    }
};

const mapStateToPros = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default (connect) (
    mapStateToPros, 
    { signIn, signOut }
) (GoogleAuth);