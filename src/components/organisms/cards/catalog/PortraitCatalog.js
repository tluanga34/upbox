import style from "./catalog.module.scss"

export default function PortraitCatalog({ className = '', titleNumber, imageUrl, bgImageUrl, titleText, bodyText }) {
  return (
    <div className={`${className} ${style.portraitCatalogContainer}`}>

      <div className="position-relative">
        <img className={style.portraitFgImage} src={imageUrl} />
        <img className={style.portraitBgImage} src={bgImageUrl} />
        <h2 className={style.portraitTitleNumber}>{titleNumber}</h2>
      </div>

      <div className={style.portraitTextSection}>
        <h3 className={style.titleText}>{titleText}</h3>
        <p className={style.bodyText}>{bodyText}</p>
      </div>
    </div>
  )
}