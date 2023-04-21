import React from 'react';

export class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
    this.resetError = this.resetError.bind(this);
  }
  
  static getDerivedStateFromError(error) {
    console.log('Get derived state');
    return { hasError: true}
  }
  
  componentDidCatch(error, errorInfo) {
    console.log('Component did catch')
    // console.log(error, errorInfo);
    // this.setState({hasError: false})
  }
  
  resetError() {
    this.props.resetError();
    this.setState({hasError: false})
  }
  
  addResetToFallBack(FallbackComponent) {
    // console.log(FallbackComponent);
    // console.log(errorProps, 'component props');
    return <FallbackComponent resetError={this.resetError} />
  }
  
  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      return this.addResetToFallBack(this.props.fallback);
    }
    return this.props.children;
  }
}