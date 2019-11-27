import React, { useState } from 'react'

export default function Root () {
  const [src, setSrc] = useState('')

  return (
    <>
      <nav>
        <input
          onBlur={(event) => {
            setSrc(event.target.value)
          }}
          type='text'
        />
      </nav>

      <div id='preview'>
        <iframe src={src} />
      </div>
    </>
  )
}
