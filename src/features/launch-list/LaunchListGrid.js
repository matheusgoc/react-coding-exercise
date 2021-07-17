import LaunchItem from "./LaunchItem";

const LaunchListGrid = ({launches, loading, error, onSelect, onLoad}) => {
  return (
    <section className="grid">
      <header>
        <label style={{width: '40%'}}>Mission Name</label>
        <label style={{width: '30%'}}>Rocket Name</label>
        <label style={{width: '15%', textAlign: 'center'}}>Rocket Type</label>
        <label style={{width: '15%', textAlign: 'center'}}>Launch Year</label>
      </header>
      {launches.map((launch) =>
        <LaunchItem key={launch.id} launch={launch} onSelect={() => {onSelect(launch)}} />
      )}
      {(loading)?
        <div className="preloading">Loading...</div> :
        <button onClick={onLoad} className="btn">Load More</button>
      }
    </section>
  )
}

export default LaunchListGrid