import React from 'react';
import queryString from 'query-string';
import '../styles/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.params = queryString.parse(this.props.location.search);
  }

  render() {
    const element = this.params.name ? <p>Hello, {this.params.name}!</p> : <p> Hello, World! </p>;
    return ( 
    <div className="Home">
      <header className="Home-header">
        <h1> Home </h1>
      </header>
      {element}
    </div>);
  }
}

export default Home;
