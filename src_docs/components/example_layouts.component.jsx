import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DefaultPage, LayoutItems } from './layout_nav_items';

const ExampleLayouts = () => (
  <Switch>
    <Route path={DefaultPage.get('navPath')} component={DefaultPage.get('navComponent')} />
    {
      LayoutItems.map(layout => (
        <Route
          key={`${layout.get('navKey')}_${layout.get('navLabel')}`}
          path={layout.get('navPath')}
          component={layout.get('navComponent')}
        />
      ))
    }
  </Switch>
);

export default ExampleLayouts;
