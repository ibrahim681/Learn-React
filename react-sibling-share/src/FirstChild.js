import { Component } from "react";

class FirstChild extends Component{
    clear = () => {
        alert('cleared!');
        console.log(' function in FirstChild ');
    }

    render() {
        return (
            <div className="FirstChild">
                <h1>FirstChild Component</h1>
            </div>
          );
    }
  
}

export default FirstChild;