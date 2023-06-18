import './Publicacion.css';

export default function Publicacion(props) {
  return (
    <div className='card'>
      <img src={props.photo} alt="" />
      <div className='informacion'>
        <div className='type_rating'>
          <div className='tipo'>
            <h3>{props.type}</h3>
          </div>
          <div className='rating'>
            <h3><i class='bx bxs-star'></i>{props.rating}</h3>
          </div>
        </div>
        <div className='title'>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}
