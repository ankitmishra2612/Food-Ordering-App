
import React from 'react' ;
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const e = useRouteError(); 
    console.log(e);

  return (
    <div>
      <h1>OOPs</h1>
      <h2>You fucked Up</h2>
      <h2>{e.status} {e.statusText}</h2>

    </div>
  )
}
