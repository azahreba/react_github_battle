import React, {Component, PropTypes} from 'react';

import styles from '../styles';
const {transparentBg} = styles;

//functional stateless component
/*function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center"
             style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Github Username"
                               onChange={props.onUpdateUser}
                               value={props.username}
                        />
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

Prompt.propTypes = () => {
    return {
        header: PropTypes.string.isRequired
    };
};*/

class Prompt extends Component {
    static get propTypes() {
        return {
            header: PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center"
                 style={transparentBg}>
                <h1>{this.props.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.props.onSubmitUser}>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Github Username"
                                   onChange={this.props.onUpdateUser}
                                   value={this.props.username}
                                   />
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
}

export default Prompt;