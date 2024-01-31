import SvgFile from "./sprite.svg"

export default function SvgSprite({name="logo", className = '', color = "black", size = 30, width, height}){
  return (
    <svg className={`${className}`} fill={color} width={width || size} height={height || size}>
       <use href={`${SvgFile}#${name}`} />
   </svg>
  )
}