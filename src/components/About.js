import React from 'react'
import queryString from 'query-string';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.params = queryString.parse(this.props.location.search);
  }

  render() {
    return <h1>About</h1>
  }
}
export default About