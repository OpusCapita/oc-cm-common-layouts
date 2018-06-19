import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LayoutItems } from './layout_nav_items';

const ExampleLayouts = () => (
  <Switch>
    {
      LayoutItems.map(layout => (
        <Route
          key={layout.get('navKey')}
          path={layout.get('navPath')}
          component={layout.get('navComponent')}
        />
      ))
    }
    <Route path="*" render={() => <Redirect to={LayoutItems.getIn([0, 'navPath'])} />} />
  </Switch>
);

export default ExampleLayouts;
