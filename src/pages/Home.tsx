
import Login from '../componentes/Forms/Login'
const fondo = require('../assets/fondoInicio.svg')


const Home= () => {
  return (
   <div className="login" style={{display:"grid", placeItems:"center", height:'100vh', width:'100%'}}>
      <Login/>
   </div>
   )
 }

export default Home