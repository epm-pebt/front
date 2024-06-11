import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error('ErrorBoundary caught an error', error, errorInfo);
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }

    handleRetry = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            const { fallbackUI, fallbackMessage } = this.props;
            return (
                <div
                    role="alert"
                    style={{
                        padding: '20px',
                        border: '1px solid red',
                        borderRadius: '5px',
                    }}
                >
                    {fallbackUI ? (
                        fallbackUI
                    ) : (
                        <>
                            <h1>Something went wrong.</h1>
                            {fallbackMessage && <p>{fallbackMessage}</p>}
                            <button onClick={this.handleRetry}>
                                Try Again
                            </button>
                        </>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallbackUI: PropTypes.node,
    fallbackMessage: PropTypes.string,
    onError: PropTypes.func,
};

export default ErrorBoundary;
