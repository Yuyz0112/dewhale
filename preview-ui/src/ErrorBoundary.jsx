import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700">
          <h1 className="text-lg font-bold">Something went wrong.</h1>
          {this.state.error && (
            <pre className="overflow-auto text-sm mt-2 bg-red-50 p-2">
              <code>{this.state.error.toString()}</code>
            </pre>
          )}
          {this.state.errorInfo && (
            <pre className="overflow-auto text-sm mt-2 bg-red-50 p-2">
              <code>{this.state.errorInfo.componentStack}</code>
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
