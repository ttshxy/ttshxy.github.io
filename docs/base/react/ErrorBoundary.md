# 错误边界

错误边界是一种 React 组件，这种组件**可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI**，而并不会渲染那些发生崩溃的子组件树。错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。

演示地址：[https://codepen.io/gaearon/pen/wqvxGa?editors=0010](https://codepen.io/gaearon/pen/wqvxGa?editors=0010)

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
       let c = a + b;
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

![image-20220726103608495](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220726103608495.png)

![image-20220726103534265](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220726103534265.png)