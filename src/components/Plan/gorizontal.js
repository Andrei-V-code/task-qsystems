import React from 'react';

import { Section, Header, UL, LI, BodyG, UlBody, LiBody } from '../../style/plan';

const Gorizontal = ({ title, p1, p2, p3 }) => {
  return (
    <Section>
      <Header>
        <UL>
          <LI>{title}</LI>
        </UL>
      </Header>
      <BodyG>
        <UlBody>
          <LiBody><strong>{p1}</strong></LiBody>
          <LiBody><strong>{p2}</strong></LiBody>
          <LiBody><strong>{p3}</strong></LiBody>
        </UlBody>
      </BodyG>
    </Section>
  );
};

export default Gorizontal;
