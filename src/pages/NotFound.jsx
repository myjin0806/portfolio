import React from 'react'

const NotFound = () => {
  return (
    <div className='notFound jouralLayout'>
      <div className="board">
        <div className="notFoundWrap">
        <h2>요청하신 페이지를 찾을 수 없어요.</h2>
        <img src="/images/gif_teemo_404.gif" alt="404 티모" className='teemoFaceSleep' />
        </div>
      </div>
    </div>
  )
}

export default NotFound