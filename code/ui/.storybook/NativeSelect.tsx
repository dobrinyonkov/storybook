import type { FC } from 'react';
import React from 'react';
import { logger } from '@storybook/client-logger';

export const NativeSelect: FC<any> = (props) => {
  const { name, options } = props;
  if (!options) {
    logger.warn(`Select with no options: ${name}`);
    return <>-</>;
  }

  return (
    <>
      <select name="" id="">
        {Object.keys(options).map((key) => (
          <option key={key}>{key}</option>
        ))}
      </select>
    </>
  );
};
