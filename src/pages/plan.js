import React from 'react';

import Item from '../components/Plan/index';
import { ItemsWrap, GorizontalWrap } from '../style/plan';
import Axios from '../core/axios';
import Gorizontal from '../components/Plan/gorizontal';

function Plan() {
  const initialState = [];
  const [item, setItem] = React.useState(initialState);
  const [obj, setObj] = React.useState(initialState);

  const useEffectItem = () => {
    Axios.get('/plan.json')
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };

  React.useEffect(useEffectItem, []);

  const useEffectGorizontal = () => {
    Axios.get('/gorizontal.json')
      .then((res) => {
        console.log(res.data);
        setObj(res.data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };

  React.useEffect(useEffectGorizontal, []);

  return (
    <>
      <ItemsWrap>
        {item.map((obj) => (
          <Item
            key={obj.id}
            title={obj.title}
            subtitle={obj.subtitle}
            p1={obj.p1}
            p2={obj.p2}
            p3={obj.p3}
            p4={obj.p4}
          />
        ))}
      </ItemsWrap>
      <GorizontalWrap>
      {obj.map((obj) => (
          <Gorizontal
            key={obj.id}
            title={obj.title}
            p1={obj.p1}
            p2={obj.p2}
            p3={obj.p3}
          />
        ))}
      </GorizontalWrap>
    </>
  );
}

export default Plan;
