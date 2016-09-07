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
    static get originalText(){
        return 'Loading';
    }

    static get stopperText() {
        return this.originalText + '...';
    }

    static get speed() {
        return 300;
    }

    componentWillMount() {
        this.setState({
            text: this.constructor.originalText
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.text === this.constructor.stopperText) {
                this.setState({
                    text: this.constructor.originalText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, this.constructor.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

// Loading.defaultProps = {
//     originalText: 'Loading',
//     get stopperText() {
//         return this.originalText + '...';
//     }
// };

export default Loading;
