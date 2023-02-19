import React from 'react';
import { addons, types, type API } from '@storybook/manager-api';
import startCase from 'lodash/startCase.js';
import { NativeSelect } from './NativeSelect';

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(name)),
  },
});

addons.register('my-addon', (api: API) => {
  addons.addControl('nativeselect', {
    title: 'My Control',
    type: types.CONTROL,
    paramKey: 'my-control',
    render: NativeSelect,
  });
});
