import { useRef } from "react";
import Container from "../../atoms/layouts/container/Container";
import SvgSprite from "../../atoms/svg_sprite/SvgSprite";
import TopBarDecorator from "../../atoms/top_bar_decorator/TopBarDecorator";
import style from "./NavBar.module.scss"
import Button from "../../atoms/form_elements/Button/Button";
import { NavLink } from "react-router-dom";
import DesktopNav from "./desktop_nav/DesktopNav";
import MobileNav from "./mobile_nav/MobileNav";

export default function NavBar() {

  const { current: navDataItems } = useRef([
    {
      name: "This Month",
      href: "/this-month",
      id: 1
    },
    {
      name: "Skin",
      href: "/skin",
      id: 2
    },
    {
      name: "Hair",
      href: "/hair",
      id: 3
    },
    {
      name: "Bath",
      href: "/bath",
      id: 4
    },
    {
      name: "Sale",
      href: "/sale",
      id: 5
    }
  ]);


  return (
    <nav className={style.NavBarMain}>
      <TopBarDecorator />
      <Container>
        <div className="d-flex justify-content-space-between align-items-center py-10">
          <div>
            <NavLink to="/">
              <SvgSprite name="logo" width="150" height="50" />
            </NavLink>
          </div>
          <div className="">

            <DesktopNav navItems={navDataItems} className={style.DesktopNav}/>
           
            <MobileNav navItems={navDataItems} className={style.MobileNav}/>
          </div>
        </div>
      </Container>
    </nav>
  )
}