import { useState } from "react";
import SvgSprite from "../../../atoms/svg_sprite/SvgSprite";
import style from "./MobileNav.module.scss";
import { NavLink } from "react-router-dom";

export default function MobileNav({ navItems, className = '' }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={className}>
      <button className="bg-color-transparent border-color-transparent" onClick={e => { setMenuOpen(true) }}>
        <SvgSprite name="hamburger" />
      </button>

      <div className={`${style.SlidingMenu} ${menuOpen ? style.active : "''"} bg-color-f5f8` }>

        <button className="bg-color-transparent border-color-transparent position-absolute right-20 top-20" onClick={e => { setMenuOpen(false) }}>
          <SvgSprite name="hamburger-close" />
        </button>


        <ul className={style.NavItemsContainer}>
          {navItems.map(eachNavItem =>
            <li className={style.NavItem} key={eachNavItem.id}>
              <NavLink to={eachNavItem.href} onClick={e=>{setMenuOpen(false)}}>{eachNavItem.name}</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}