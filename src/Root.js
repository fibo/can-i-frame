import React, { useState } from 'react'

export default function Root () {
  const [src, setSrc] = useState('')

  return (
    <div>
      <input
        onBlur={(event) => {
          setSrc(event.target.value)
        }}
        type='text'
      />

      <div>
        <iframe src={src} />
      </div>
    </div>
  )
}
