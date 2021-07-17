import { useState, useEffect } from 'react';
import './LaunchList.css';
import { gql, useLazyQuery } from '@apollo/client';
import LaunchListHeader from "./LaunchListHeader";
import LaunchListGrid from "./LaunchListGrid";

const LaunchList = ({onSelect}) => {

  const limit = 6
  const sort = 'launch_year'
  const order = 'desc'
  const [launches, setLaunches] = useState([])
  const [offset, setOffset] = useState(0)
  const [mission, setMission] = useState('')

  const [getLaunches, { loading, error }] = useLazyQuery(LAUNCHES_QUERY, {
    onCompleted: (data) => {
      setLaunches(launches.concat(data.launchesPast))
    },
  });

  const loadLaunches = () => {
    getLaunches({variables: { limit, offset, mission, sort, order }})
  }

  useEffect(() => {
    loadLaunches()
  }, [])

  const handleLoad = () => {
    setOffset(offset + limit)
    loadLaunches();
  }

  const handleSearch = (search) => {
    setMission(search)
    setOffset(0)
    setLaunches([])
    loadLaunches()
  }

  return (
    <div id="launch-list">
      <div className="side" />
      <div className="list">
        <LaunchListHeader onSearch={handleSearch} />
        <LaunchListGrid
          launches={launches} loading={loading} error={error}
          onLoad={handleLoad} onSelect={onSelect}
        />
      </div>
    </div>
  )
}

const LAUNCHES_QUERY = gql`
    query GetLaunches($limit: Int!, $offset: Int!, $mission: String!, $sort: String!, $order: String!) {
      launchesPast(limit: $limit, offset: $offset, find: {mission_name: $mission}, sort: $sort, order: $order) {
        id
        mission_name
        rocket {
          rocket_name
          rocket_type
        }
        launch_year
      }
    }
  `

export default LaunchList