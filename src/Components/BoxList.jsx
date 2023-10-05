/* eslint-disable react/prop-types */


export const BoxList = ({info , like}) => {





  return (
    <div className="list-wrapper">
        <h3>{info.message}</h3>
        <div className="info-wrapper">
            <div className="like">
                <button className="like-btn" onClick={() => like(info._id)}><span className="emoji">❤️</span></button>
                <span className="like-number">x  {info.hearts}</span>
            </div>
            <div className="time">{info.createdAt}</div>
        </div>

    </div>
  )
}
