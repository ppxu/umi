import React from 'react';

const fetch = () => Promise.resolve([{
  userId: 1,
  title: 'hello'
}, {
  userId: 2,
  title: 'world'
}]);

const Home = props => {
  const { result } = props;
  return (
    <div>
      <h1>{global.mockLocation.pathname}</h1>
      <ul>
        {result.map((item, i) => <li key={item.userId}>{item.title}</li>)}
      </ul>
    </div>
  );
};

Home.getInitialProps = async props => {
  const result = await fetch();
  return {
    result,
  };
};

export default Home;
