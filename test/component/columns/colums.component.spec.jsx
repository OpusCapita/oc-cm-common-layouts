/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable function-paren-newline */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { BaseColumnComponent } from '../../../src/index';

describe('BaseColumnComponent', function () {
  before(function before() {
    const mockStore = configureMockStore();
    this.store = mockStore({});
  });

/*
  // Correct render
  it('should render correctly when single Array element given', function() {
    const columns = [];
    const wrap = mount(
      <BaseColumnComponent columns={columns} />,
    );
    // assert elements:
  });

  it('should render correctly when two Array element given (left/right)', function() {
    const columns = [];
    const wrap = mount(
      <BaseColumnComponent columns={columns} />,
    );
    // assert elements:
  });

  it('should render correctly when three Array element given (left/middle/right)', function() {
    const columns = [];
    const wrap = mount(
      <BaseColumnComponent columns={columns} />,
    );
    // assert elements:
  });
*/
});
