import React from 'react';

import { HomePage } from '../style/home';
import Main from '../components/Main';

const Home = () => {
  /* const [main, setMain] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('/main.json');
      console.log(data);
      return setMain(data);
      
    })();
  }); */

  /* React.useEffect(() => {
    axios
      .get('/main.json')
      .then((res) => {
        console.log(res);
        setMain(res);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }); */

  /* React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/main.json');
        console.log(response, 'response');
        setMain(response);
      } catch (e) {
        console.error(e.message)
      }
    })
  } */

  return (
    <HomePage>
      <Main />
    </HomePage>
  );
};

export default Home;
