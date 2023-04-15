import React from 'react'

interface IModalPlaygroundProps {

  customClass?: string;

}
function ModalPlayground({customClass = ""} : IModalPlaygroundProps) {
  return (
    <div className={ customClass}>ModalPlayground</div>
  )
}

export default ModalPlayground