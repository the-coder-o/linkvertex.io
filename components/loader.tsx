import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className={'fixed bottom-0 left-0 right-0 top-0 z-[9999999999] flex items-center justify-center bg-black'}>
      <ClipLoader size={50} aria-label="Loading Spinner" data-testid="loader" color={'#fff'} />
    </div>
  )
}

export default Loader
