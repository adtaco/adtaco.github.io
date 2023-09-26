import React from 'react';
import PKG from '@site/package.json';
import type {Props} from '@theme/Footer/Copyright';

export default function FooterCopyright({copyright}: Props): JSX.Element {
  return (
    <div className="flex flex-wrap mt-8">
      <div
        className="w-full lg:flex-1 flex justify-start items-end text-neutral-300"
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: copyright}}
      />
      <div className="flex-initial flex justify-end items-end">
        <span className="text-neutral-500 text-sm">v{PKG.version}</span>
      </div>
    </div>
  );
}
