import React from 'react'

type IconProps = { img: string}

const Icon = ({img}: IconProps) => {
  return (
    <div>
      <img className='size-13' src={img} alt="" />
    </div>
  )
}

export default Icon
