import React from 'react';

import TheoryItem from '../components/Theory/index';
import { TheoryWrap } from '../style/theory';
import Axios from '../core/axios';
import Header from '../components/Theory/header';

const Theory = () => {
  const initialState = [];
  const [item, setItem] = React.useState(initialState);

  const useEffectTheory = () => {
    Axios.get('/theory.json')
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };

  React.useEffect(useEffectTheory, []);

  return (
    <TheoryWrap>
      <Header />
      {item.map((obj) => {
        return <TheoryItem key={obj.id} title={obj.title} number={obj.number} />;
      })}
    </TheoryWrap>
  );
};

export default Theory;
