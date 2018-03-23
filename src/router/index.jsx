import React from 'react'
import  { BrowserRouter as Router, Route } from 'react-router-dom'

import PageOne from 'views/page1'
import PageTwo from 'views/page2'

 const Routes = () => (
   <Router>
       <Route path="/two" component={PageTwo}>
         {/* <Route path = "home" component = {PageOne} /> */}
         {/*<Route path = "about" component = {PageOne}/> */}
         <Route path = "/one" component = {PageOne} />
       {/* <Route path="/two" component={PageOne}></Route>        */}
       </Route>
       
   </Router>
 )
export default Routes