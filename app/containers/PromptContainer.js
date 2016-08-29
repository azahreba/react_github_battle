import React, {Component, PropTypes} from 'react';

import styles from '../styles';
const {transparentBg} = styles;

class PromptContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center"
                 style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="Github Username"
                                   onChange={this.onUpdateUser.bind(this)}/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button className="btn btn-block btn-success"
                                    type="submit">Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    onUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmitUser(e) {
        e.preventDefault();
        let {username} = this.state;

        this.setState({
            username: ''
        });

        //dynamicaly change routes
        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username,
                }
            });
        } else {
            this.context.router.push('playerTwo/' + this.state.username);
        }
    }

    static get contextTypes() {
        return {router: PropTypes.object.isRequired};
    }
}

export default PromptContainer;