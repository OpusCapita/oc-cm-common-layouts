import React from 'react';
import { List, Map } from 'immutable';
// Example imports:
import ContainerComponentView from './container/component-view';
import BaseColumnComponentView from './base-column/component-view';
import TwoColumnComponentView from './two_cols/component-view';
import ThreeColumnComponentView from './three_cols/component-view';
import FourColumnComponentView from './four_cols/component-view';

export const DefaultPage = Map({
  navLabel: 'OC CM Layouts',
  navPath: '/home',
  navComponent: ContainerComponentView,
});

export const LayoutItems = List([
  Map({
    navLabel: 'Base Column', navKey: 2, navPath: '/base', navComponent: BaseColumnComponentView,
  }),
  Map({
    navLabel: '2 Column', navKey: 3, navPath: '/two_cols', navComponent: TwoColumnComponentView,
  }),
  Map({
    navLabel: '3 Column', navKey: 4, navPath: '/three_cols', navComponent: ThreeColumnComponentView,
  }),
  Map({
    navLabel: '4 Column', navKey: 5, navPath: '/four_cols', navComponent: FourColumnComponentView,
  }),
]);
