import './Publicacion.css';

export default function Publicacion(props) {
  return (
    <div className='card'>
      <picture className='imgBox'>
        <img src={props.photo} alt="" />
      </picture>
      <div className='informacion'>
        <div className='type_rating'>
          {props.superHost ? (
            <div className='superHost'>
              <span>SUPER HOST</span>
            </div>
          ) : ""}
          <div className='tipo'>
            <span>{props.type}</span>
            {props.superHost ? (
              <span>. 2 beds</span>
            ) : ""}
          </div>
          <div className='rating'>
            <h3><i className='bx bxs-star'></i>{props.rating.toFixed(2)}</h3>
          </div>
        </div>
        <div className='title'>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}
