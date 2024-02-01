import topDecorIconDesktop from "./images/topbar-desktop.png";
import topDecorIconTable from "./images/topbar-tablet.png";
import topDecorIconMobile from "./images/topbar-mobile.png";
import style from "./TopBarDecorator.module.scss";

export default function TopBarDecorator() {
  return (
    <>
      <img className={`d-block d-tablet-none d-mobile-none w-100 ${style.decorImgElement}`} src={topDecorIconDesktop} />
      <img className={`d-block d-desktop-none d-mobile-none w-100 ${style.decorImgElement}`} src={topDecorIconTable} />
      <img className={`d-block d-desktop-none d-tablet-none w-100 ${style.decorImgElement}`} src={topDecorIconMobile} />
    </>
  )
}