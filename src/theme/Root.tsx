import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  require('tw-elements');
}

export default function Root({ children }): JSX.Element {
  return <>{children}</>;
}
