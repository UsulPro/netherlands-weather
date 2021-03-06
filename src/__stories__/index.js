import React from 'react';
import { storiesOf } from '@storybook/react';
import { ServerLocation } from '@reach/router';
import '../common/__stories__/index';
import '../panel/__stories__/index';

import { client } from '../apollo/index';

import App from '../app';

storiesOf('App', module)
  .add('Home', () => (
    <ServerLocation url={'/'}>
      <App client={client()} />
    </ServerLocation>
  ))
  .add('Amsterdam', () => (
    <ServerLocation url={'/cities/amsterdam'}>
      <App client={client()} />
    </ServerLocation>
  ))
  .add('Rotterdam', () => (
    <ServerLocation url={'/cities/rotterdam'}>
      <App client={client()} />
    </ServerLocation>
  ));
