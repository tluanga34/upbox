import { NavLink } from "react-router-dom";
import Container from "../../atoms/layouts/container/Container";
import SvgSprite from "../../atoms/svg_sprite/SvgSprite";

export default function Footer() {
  return (
    <footer className="p-20">
      <div className="px-40 px-mobile-20 py-15 border-color-ed bg-color-fa border-style-solid border-width-3">
        <Container className="d-flex justify-content-space-between align-items-center px-mobile-0">
          <div>
            <NavLink to="/" title="Upbox logo -> Go to home">
              <SvgSprite width="110" height="50" />
            </NavLink>
          </div>
          <div>
            <a href="https://www.instagram.com/upbox" target="_blank" title="Our Instagram link">
              <SvgSprite size="35" name="instagram" />
            </a>
            <a href="https://www.facebook.com/upbox" target="_blank" title="Our Facebook link">
              <SvgSprite size="35" name="facebook" />
            </a>
            <a href="https://twitter.com/upbox" target="_blank" title="Our Twitter link">
              <SvgSprite size="35" name="twitter" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}