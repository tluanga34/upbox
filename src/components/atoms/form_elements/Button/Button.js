import SvgSprite from "../../svg_sprite/SvgSprite"
import style from "./Button.module.scss"

export default function Button({children, type="md-grey", className}) {
  return (
    <button btn-type={type} className={`${style.Button} ${className? className : ''}`}>
      <span>{children}</span>
      <SvgSprite className={style.svgSprite} size="20" name="chevron-forward-outline"/>
    </button>
  )
} 