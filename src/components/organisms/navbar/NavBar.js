import { useRef } from "react";
import Container from "../../atoms/layouts/container/Container";
import SvgSprite from "../../atoms/svg_sprite/SvgSprite";
import TopBarDecorator from "../../atoms/top_bar_decorator/TopBarDecorator";
import style from "./NavBar.module.scss"
import Button from "../../atoms/form_elements/Button/Button";

export default function NavBar() {

  const { current: navDataItems } = useRef([
    {
      name: "This Month",
      id: 1
    },
    {
      name: "Skin",
      id: 2
    },
    {
      name: "Hair",
      id: 3
    },
    {
      name: "Bath",
      id: 4
    },
    {
      name: "Sale",
      id: 5
    }
  ]);


  return (
    <nav className={style.NavBarMain}>
      <TopBarDecorator />
      <Container>
        <div className="d-flex justify-content-space-between align-items-center py-10">
          <div>
            <SvgSprite name="logo" width="150" height="50" />
          </div>
          <div className="">
            <ul className={style.NavItemContainer}>
              {navDataItems.map(item => <li className={style.NavItem} key={item.id}>
                <a href="" className="text-transform-uppercase">{item.name}</a>
              </li>)}
              <li className={style.NavItem}>
                <Button>Login</Button>
              </li>
            </ul>

            
          </div>
        </div>
      </Container>
    </nav>
  )
}