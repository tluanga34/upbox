import Container from "../../atoms/layouts/container/Container";
import SvgSprite from "../../atoms/svg_sprite/SvgSprite";

export default function Footer() {
  return (
    <footer className="p-20">
      <div className="px-40 py-20 border-color-ed bg-color-fa border-style-solid border-width-5">
        <Container className="d-flex justify-content-space-between align-items-center">
          <div>
            <SvgSprite width="150" height="50" />
          </div>
          <div>
            <SvgSprite size="40" name="instagram" />
            <SvgSprite size="40" name="facebook" />
            <SvgSprite size="40" name="twitter" />
          </div>
        </Container>
      </div>
    </footer>
  )
}