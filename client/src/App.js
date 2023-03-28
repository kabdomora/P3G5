import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationGoal, setDonationGoal] = useState(1000);

  const handleDonation = (amount) => {
    setDonationAmount(donationAmount + amount);
  };

  const percentComplete = Math.floor((donationAmount / donationGoal) * 100);

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/'> 
              <div className='donation-graph'>
                <div className='graph-bar' style={{ width: `${percentComplete}%` }}>
                  <span>${donationAmount}</span>
                </div>
                <span>${donationGoal}</span>
              </div>
              <button onClick={() => handleDonation(10)}>Donate $10</button>
            </Route> 
            <Route path='/saved'> 
              {/* page here */}
            </Route>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;