import { NavLink } from "react-router-dom";
import Container from "../../atoms/layouts/container/Container";
import SvgSprite from "../../atoms/svg_sprite/SvgSprite";

export default function Footer() {
  return (
    <footer className="p-20">
      <div className="px-40 py-20 border-color-ed bg-color-fa border-style-solid border-width-5">
        <Container className="d-flex justify-content-space-between align-items-center">
          <div>
            <NavLink to="/">
              <SvgSprite width="150" height="50" />
            </NavLink>
          </div>
          <div>
            <a href="https://www.instagram.com" target="_blank">
              <SvgSprite size="40" name="instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <SvgSprite size="40" name="facebook" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <SvgSprite size="40" name="twitter" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}