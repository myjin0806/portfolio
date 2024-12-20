import React from 'react'


const contect = () => {
  return (
    <div className='contect jouralLayout'>
      <div className="contectBoard board">
        <div className="contectWrap">
          <h2 className='contectTitle'>
            CONTECT
          </h2>
          <ul className='contectList'>
            <p><i class="bi bi-github"></i><a href="https://github.com/myjin0806">git/ @myjin0806</a></p>
            <p><i class="bi bi-telephone-plus-fill"></i>010-2420-8247</p>
            <p><i class="bi bi-envelope-fill"></i>myjin0806@naver.com</p>
          </ul>
        </div>
        <img src="images/gif_teemo_heart.gif" alt="하트티모얼굴" className='teemoFaceHeart'/>
      </div>
    </div>
  )
}

export default contect