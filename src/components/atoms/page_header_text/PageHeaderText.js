import style from "./PageHeaderText.module.scss"

export default function PageHeaderText({text, className = ''}) {
  return (
    <h2 className={`${style.headerElement} ${className}`}>{text}</h2>
  )
}