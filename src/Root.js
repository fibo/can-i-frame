import classnames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

const navHeight = 56

export default function Root () {
  const inputRef = useRef(null)

  const [active, setActive] = useState(false)
  const [height, setHeight] = useState(window.innerHeight - navHeight)
  const [src, setSrc] = useState('')

  useEffect(() => {
    function handleResize () {
      setHeight(window.innerHeight - navHeight);
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [setHeight])

  return (
    <>
      <nav>
        <form
          onSubmit={(event) => {
            event.preventDefault()

            setSrc(inputRef.current.value)
          }}
        >
          <div className={classnames('field', { active })}>
            <label>
              Your URL
            </label>

            <input
              onBlur={(event) => {
                setActive(false)

                setSrc(event.target.value.trim())
              }}
              onFocus={() => {
                setActive(true)
              }}
              ref={inputRef}
              type='text'
            />
          </div>
        </form>
      </nav>

      <iframe height={height} src={src} />
    </>
  )
}
