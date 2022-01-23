import React from 'react';

import { UL, LI, Header, Body, LiBody, UlBody, Wrap } from '../../style/plan';

const Item = ({ title, subtitle, p1, p2, p3, p4 }) => {
  return (
    <>
      <Wrap>
        <Header>
          <UL>
            <LI>
              <strong>{title}</strong>
            </LI>
            <LI>
              <strong>{subtitle}</strong>
            </LI>
          </UL>
        </Header>
        <Body>
          <UlBody>
            <LiBody>
              <strong>{p1}</strong>
            </LiBody>
            <LiBody>
              <strong>{p2}</strong>
            </LiBody>
            <LiBody>
              <strong>{p3}</strong>
            </LiBody>
            <LiBody>
              <strong>{p4}</strong>
            </LiBody>
          </UlBody>
        </Body>
      </Wrap>
    </>
  );
};

export default Item;
