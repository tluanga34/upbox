import style from "./catalog.module.scss"

export default function LandscapeCatalog({ imageUrl, titleText, bodyText, className = '' }) {
  return (
    <div className={`d-flex justify-content-space-between ${className}`}>
      <div className={style.imageSection}>
        <img className="w-100" src={imageUrl} />
      </div>
      <div className="px-20 pt-50">
        <h3 className={style.titleText}>{titleText}</h3>
        <p className={style.bodyText}>{bodyText}</p>
      </div>
    </div>
  )
}