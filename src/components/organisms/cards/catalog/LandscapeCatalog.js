import style from "./catalog.module.scss"

export default function LandscapeCatalog({ imageUrl, titleNumber, titleText, bodyText, className = '' }) {
  return (
    <div className={`d-flex justify-content-space-between ${style.landscapeFlexContainer} ${className}`}>
      <div className={`${style.imageSection} position-relative`}>
        <img className="w-100" src={imageUrl} />
        <h2 className={style.landscapeTitleNumber}>{titleNumber}</h2>
      </div>
      <div className={`${style.landscapeTextSection} pl-40 pt-50`}>
        <h3 className={style.titleText}>{titleText}</h3>
        <p className={style.bodyText}>{bodyText}</p>
      </div>
    </div>
  )
}