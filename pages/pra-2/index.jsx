import React from 'react'
import Image from 'next/image';

export default function Pra_2() {
  return (
    <>
    
    <div id="kiko-slider">
  
  <ul className="slider">
    <li id="slide1">
      <h1>Hola Programadores</h1>
      <Image className='img' src="/images/tiwanaku.jpg" width={700} height={300} alt='ok'/>
    </li>
    <li id="slide2">
      <Image className='img' src="/images/villa_tunari.jpg" width={700} height={300} alt='ok'/>
    </li>
    <li id="slide3">
      <h1>Ejemplo con otros elementos</h1>
      <p>Esto es un párrafo de ejemplo para comprobar que podemos meter cualquier tipo de elementos en el slider</p>
      <a href="https://kikopalomares.com/">¡Corre a mi web para más contenido!</a>
    </li>
  </ul>
  
  <ul className="menu">
    <li>
      <a href="#slide1">1</a>
    </li>
    <li>
      <a href="#slide2">2</a>
    </li>
     <li>
      <a href="#slide3">3</a>
    </li>
  </ul>
  
</div>
    
    </>
  )
}
