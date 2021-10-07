// yarn add react-router-dom
// yarn add -D @types/react-router-dom
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

export const Routes: React.FC = () => {

  return(
    <Switch>
      <Route component={Dashboard} path='/' exact/>
      <Route component={Repository} path='/repositories'/>
    </Switch>
  )
}