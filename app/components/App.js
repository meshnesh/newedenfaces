import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
       <Footer/>
      </div>
    );
  }
}

export default App;

