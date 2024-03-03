import { useSelector } from "react-redux"
import defaultAvatar from '@assets/images/avatars/default-avatar-icon-of-social-media-user-vector.jpg'
import { useEffect, useState } from "react"


const BotAvatarMini = ({ _id, w, h, className }) => {
  const [imgSrc, setImgSrc] = useState(defaultAvatar)
  const [loadError, setLoadError] = useState(false)
  const imageVersion = useSelector(state => state.imageVersion)
  const imageWith = w || 200
  const imageHeight = h || 200
  const version = imageVersion

  useEffect(() => {
    if (_id) {
      let src = `${process.env.REACT_APP_FILE_URL}/api/storage/photo/${_id}`
      if (w && h)
        src = `${process.env.REACT_APP_FILE_URL}/api/storage/photo/${_id}/resize/${imageWith}/${imageHeight}`

      setImgSrc(src)
    }
  }, [_id, w, h])


  const handleImageError = () => {
    setLoadError(true)
  }

  return (
    <div className={className}>
      {process.env.REACT_APP_FILE_UR}
      {_id && !loadError && (
        <div style={{ width: w, height: h }}>
          <img src={imgSrc} className="img-fluid rounded" onError={handleImageError} />
        </div>
      )}

      {(!_id || loadError) && (
        <div style={{ width: w, height: h }}>
          <img src={defaultAvatar} className="img-fluid rounded" />
        </div>
      )}
    </div>
  )
}

export default BotAvatarMini