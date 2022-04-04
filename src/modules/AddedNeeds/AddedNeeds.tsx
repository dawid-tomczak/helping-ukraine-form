import React, { ReactElement, useContext } from 'react';
import { NeedsContext } from '../../contexts/NeedsContext';
import { NeedsTable } from './NeedsTable/NeedsTable';

export const AddedNeeds = (): ReactElement => {
  const { needs } = useContext(NeedsContext);

  return <NeedsTable needs={needs} />;
};
