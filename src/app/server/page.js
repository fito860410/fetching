import React from 'react'
import { use } from 'react'
import Link from 'next/link'

async function getCharacters(){
  return await (await fetch("https://rickandmortyapi.com/api/character", {cache: "no-store"})).json()
}

export default function Serverpage() {
  const allCharacters = use(getCharacters())

  return (
    <div>
      <h2>Get Server Side Props</h2>
      {
        /* el signo de interrogacion es para preguntar si no es nula
        la cadena para que no de error*/
        allCharacters?.results?.map(c=> 
          {
            return (
              <ul key={c.id}>    
                <Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>      
                  <li>{c.name}</li> 
                </Link>            
              </ul>  
            )
          }
        )
      }
    </div>
  )
}
