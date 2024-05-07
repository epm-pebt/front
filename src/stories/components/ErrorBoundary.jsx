import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: {},
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops, something went wrong!</h1>
                    <p>The error: {this.state.error.toString()}</p>
                    {this.state.errorInfo ? (
                        <p>
                            Where it occurred:{' '}
                            {this.state.errorInfo.componentStack}
                        </p>
                    ) : null}
                </div>
            );
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;
