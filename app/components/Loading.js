import React, {
    Component,
    PropTypes,
} from 'react';

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
    }
};

class Loading extends Component {
    static get ORIGINAL_TEXT() {
        return 'Loading';
    }

    constructor() {
        super();
        this.state = {
            text: this.ORIGINAL_TEXT
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }

    componentDidMount() {
        const stopper = 'Loading...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.ORIGINAL_TEXT
                });
            } else {
                this.setState({
                    text: this.text + '.'
                });
            }
        }, 300);
    }
}

Loading.propTypes = {};
Loading.defaultProps = {};

export default Loading;