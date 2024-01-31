import style from "./Container.module.scss"

export default function Container({children, className }){
  return (
    <div className={`${style.container} ${className || ''}`}>
      {children}
    </div>
  )
}