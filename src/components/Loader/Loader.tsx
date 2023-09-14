import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
    <>
        <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="justify-center mt-10"
            visible={true}
        />
    </>
  )
}

export default Loader