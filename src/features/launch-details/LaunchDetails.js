import './LaunchDetails.css';
import ChevronLeftIcon from "../../images/chevron-with-circle-left.svg";

const LaunchDetails = ({launch, onBack}) => {
  return (
    <section id='launch-details'>
      <div className='btn-back'>
        <img src={ChevronLeftIcon} onClick={onBack} />
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-content'>
            <div className='details-mission'>
              <label>Mission Name</label>
              <div>{launch.mission_name}</div>
            </div>
            <div className='details-rocket'>
              <div>
                <label>Rocket Name</label>
                <div>{launch.rocket.rocket_name}</div>
              </div>
              <div>
                <label>Rocket Type</label>
                <div>{launch.rocket.rocket_type}</div>
              </div>
            </div>
          </div>
          <div className='details-year'>
            <label>Launch Year</label>
            <div>{launch.launch_year}</div>
          </div>
        </div>
        <button className='btn btn-print'>Print Ticket</button>
      </div>
    </section>
  )
}

export default LaunchDetails