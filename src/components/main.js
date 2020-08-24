import React from 'react';
import About from './sobre';
import Landing from './landingpage';
import Login from './login';
import Cursos from './cursos';
import Modulo from './modulo';
import Resume from './resume';
import StoreProvider from './Provider';
import RoutesPrivate from './Private'
import {Route, Switch, Router } from 'react-router-dom';

const Main = () => (
<StoreProvider>
    
    <Switch>
        <Route exact path="/" component={Landing}/>        
        <RoutesPrivate path="/sobre" component={About}/> 
        <Route path="/modulo" component={Modulo}/> 
        <Route path="/resume" component={Resume}/>        
        <RoutesPrivate path="/cursos" component={Cursos}/> 
        <Route path="/login" component={Login}/> 
     
 </Switch>
   

</StoreProvider>
   
)
export default Main;