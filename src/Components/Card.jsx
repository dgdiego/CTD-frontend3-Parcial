
const Card = ({user}) => {
  return (
    <div>
      <p>Hola <span style={{fontWeight:"bold"}}>{user.nombre}</span>! Sabemos que tu comida favorita es <span style={{fontWeight:"bold"}}>{user.comida}</span> y tu postre <span style={{fontWeight:"bold"}}>{user.postre}</span>.</p>
    </div>
  )
}

export default Card