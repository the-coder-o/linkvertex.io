import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className={'fixed top-0 left-0 bottom-0 right-0 bg-black z-[9999999999] flex items-center justify-center'}>
      <ClipLoader size={50} aria-label="Loading Spinner" data-testid="loader" color={'#fff'} />
    </div>
  )
}

export default Loader
