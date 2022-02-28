import './background.css';
import React from 'react';


class background extends React.Component {
    render() {
        return (
          <div className="background-base">
              {this.props.children}
          </div>
        ); 
    }
};


export default background;
