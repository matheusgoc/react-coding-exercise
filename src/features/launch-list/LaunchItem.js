import ChevronRightIcon from "../../images/chevron-with-circle-right.svg";

const LaunchItem = ({launch, onSelect}) => {

  return (
    <ul>
      <li style={{width: '40%'}}>{launch.mission_name}</li>
      <li style={{width: '30%'}}>{launch.rocket.rocket_name}</li>
      <li style={{width: '15%', justifyContent: 'center'}}>{launch.rocket.rocket_type}</li>
      <li style={{width: '15%', justifyContent: 'center'}}>{launch.launch_year}</li>
      <li style={{width: '40px'}} className='btn-details'>
        <img src={ChevronRightIcon} onClick={onSelect} />
      </li>
    </ul>
  )
}

export default LaunchItem