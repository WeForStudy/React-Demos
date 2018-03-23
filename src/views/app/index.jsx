import React, { Component } from 'react';
import  './index.css';
import Router from 'router'
// import PageOne from 'views/page1'
// import PageTwo from 'views/page2'
import TabBar from 'common/tabBar'

class App extends Component {
  render() {
    return (
      <div className="app">
       <div className="routerWrapper">
         <Router />
       </div>
       <TabBar/>
      </div>
    );
  }
}

export default App;
