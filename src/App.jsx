import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './jelou'
import biblio from "./assets/biblio.png"
import bol from "./assets/bol.png"
import conv from "./assets/conv.png"
import ofe from "./assets/ofe.png"

function App() {
  

  return (
    <>
    <div className='Ola'>
      <Saludo name='OFERTA EDUCATIVA' image={ofe} description='Nuestra universidad cuenta con los mejores programas educativos'/>
      <Saludo name='CONVOCATORIAS' image={conv} description ='Consulta nuestras convocatorias y participa'/>
      <Saludo name='BOLSA DE TRABAJO' image= {bol} description = 'Si hay chamba'/>
      <Saludo name='Biblioteca digital' image= {biblio} description = 'Consulta nuestra biblioteca digital'/>
    </div>
      
      
    </>
  )
}

export default App
