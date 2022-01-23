import React from 'react';

import { LI, H3, Wrap, Strong } from '../../style/theory';

const TheoryItem = ({ title, number }) => {
  return (
    <Wrap>
      <LI>
        <Strong>{number}</Strong>
        <H3>{title}</H3>
      </LI>
    </Wrap>
  );
};

export default TheoryItem;
