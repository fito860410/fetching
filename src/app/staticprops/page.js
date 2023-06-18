import { use } from 'react'
import Link from 'next/link'

async function getCharacters(){
  return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export default function Staticprops() {
  const characters = use(getCharacters())
  
  return (
    <div>
      <h2>Get Static props</h2>
      {
        /* el signo de interrogacion es para preguntar si no es nula
        la cadena para que no de error*/
        characters?.results.map(c=> 
          
          <ul key={c.id}>
            <Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
              <li>{c.name}</li>
            </Link>
          </ul>  
        )
      }
    </div>
  )
}
