import React from 'react';
import AppBar from '../AppBar';

const App = ({ children }) => (
  <div>
    <AppBar />
    {children}
  </div>
);

App.propTypes = { children: React.PropTypes.element };

export default App;
