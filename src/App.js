import './App.css';
import { useState } from 'react';
import LaunchList from "./features/launch-list/LaunchList";
import LaunchDetails from "./features/launch-details/LaunchDetails";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
})

const App = () => {

  const [launch, setLaunch] = useState(null)

  return (
    <ApolloProvider client={client}>
      {(launch)?
        <LaunchDetails launch={launch} onBack={() => setLaunch(null)} /> :
        <LaunchList onSelect={(launch) => setLaunch(launch)} />
      }
    </ApolloProvider>
  )
}

export default App
