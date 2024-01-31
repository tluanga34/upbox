import Button from "../../atoms/form_elements/Button/Button";
import Container from "../../atoms/layouts/container/Container";
import style from "./Banner.module.scss";
import boxImage from "./images/box.png"

export default function Banner() {
  return (
    <div className={`${style.BannerContainer} bg-color-f5f8`}>
      <Container className={`d-flex justify-content-between`}>
        <div className={style.textSection}>
          <h2 className={style.bannerHeadingText}>Look good without <br />
            leaving your house.</h2>
          <p className={style.bannerSubheadingText}>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>


          <Button type="lg-pink" className="mt-50">SIGN UP</Button>
          
        </div>
        <div className={style.ImageSection}>
          <img src={boxImage} className={style.Image}/>
        </div>
      </Container>
    </div>
  )
}