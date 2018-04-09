import React from 'react';
import { List, Map } from 'immutable';
// Example imports:
import ContainerComponentView from './container/component-view';

export const DefaultPage = Map({
  navLabel: 'OC CM Layouts',
  navPath: '/',
  navComponent: ContainerComponentView,
});

export const LayoutItems = List([
  Map({ navLabel: '2 Column', navKey: 1, navPath: '/two_cols', navComponent: ContainerComponentView }),
  Map({ navLabel: '3 Column', navKey: 2, navPath: '/three_cols', navComponent: ContainerComponentView }),
]);
