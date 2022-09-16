import { Component } from "react";

class SecondChild extends Component {
    render() {
        return (
            <div className="SecondChild">
              <h1>SecondChild Component</h1>
              <button onClick={() => this.props.clear()}>change</button>
            </div>
          );
    }
    
  }
  
  export default SecondChild;