import React from 'react';

import './App.css';

class Appname extends React.Component {

render() {
  const {name} = this.props;
return (

  <h1> Hello World  {name} </h1>

);
}
}
export default Appname;
