import { NavLink } from "react-router-dom"
import style from "./DesktopNav.module.scss"
import Button from "../../../atoms/form_elements/Button/Button"

export default function DesktopNav({navItems, className = ''}) {
  return (
    <ul className={`${style.NavItemContainer} m-0 ${className}`}>
      {navItems.map(item => <li className={style.NavItem} key={item.id}>
        <NavLink to={item.href} className="text-transform-uppercase" title={item.name}>{item.name}</NavLink>
      </li>)}
      <li className={style.NavItem}>
        <NavLink to="/login" title="Login to resume where you left">
          <Button>Login</Button>
        </NavLink>
      </li>
    </ul>
  )
}