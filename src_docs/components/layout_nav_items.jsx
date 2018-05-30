import React from 'react';
import { List, Map } from 'immutable';
// Example imports:
import ContainerComponentView from './container/component-view';
import MasonryComponentView from './masonry/masonry-component-view';
import FixedColumnsComponentView from './fixed-columns/fixed-columns-component-view';
import HeadersComponentView from './headers/headers-component-view';

export const DefaultPage = Map({
  navLabel: 'OC CM Layouts',
  navPath: '/home',
  navComponent: ContainerComponentView,
});

export const LayoutItems = List([

  Map({
    navLabel: 'Masonry', navKey: 1, navPath: '/masonry', navComponent: MasonryComponentView,
  }),
  Map({
    navLabel: 'Fixed columns', navKey: 2, navPath: '/fixed-columns', navComponent: FixedColumnsComponentView,
  }),
  Map({
    navLabel: 'Headers', navKey: 3, navPath: '/headers', navComponent: HeadersComponentView,
  }),
]);
