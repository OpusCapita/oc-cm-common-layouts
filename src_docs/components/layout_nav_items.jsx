// import React from 'react';
import { List, Map } from 'immutable';
// Example imports:
import MainPageView from './examples_main_page';
import MasonryComponentView from './masonry/masonry-component-view';
import FixedColumnsComponentView from './fixed-columns/fixed-columns-component-view';
import HeadersComponentView from './headers/headers-component-view';
import InputRowComponentView from './input-row/input-row-component-view';
import InputColumnComponentView from './input-column/input-column-component-view';

export const LayoutItems = List([
  Map({
    navLabel: 'Masonry',
    navKey: 1,
    navPath: '/masonry',
    navComponent: MasonryComponentView,
  }),
  Map({
    navLabel: 'Fixed columns',
    navKey: 2,
    navPath: '/fixed-columns',
    navComponent: FixedColumnsComponentView,
  }),
  Map({
    navLabel: 'Headers',
    navKey: 3,
    navPath: '/headers',
    navComponent: HeadersComponentView,
  }),
  Map({
    navLabel: 'Input row',
    navKey: 4,
    navPath: '/input-row',
    navComponent: InputRowComponentView,
  }),
  Map({
    navLabel: 'Input column',
    navKey: 5,
    navPath: '/input-column',
    navComponent: InputColumnComponentView,
  }),
]);

export const DefaultPage = Map({
  navLabel: 'oc-cm-common-layouts',
  navKey: 0,
  navPath: '/main',
  navComponent: MainPageView,
});
