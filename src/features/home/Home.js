import Button from "../../components/atoms/form_elements/Button/Button";
import Banner from "../../components/organisms/banner/Banner";
import LandscapeCatalog from "../../components/organisms/cards/catalog/LandscapeCatalog";
import PortraitCatalog from "../../components/organisms/cards/catalog/PortraitCatalog";
import style from "./Home.module.scss";

import work1 from "./images/work1.png"
import work2 from "./images/work3.png"

export default function Home() {
  document.title = "Home";

  return (
    <div>
      <Banner />
      <div className={style.catalogueContainer}>

        <h2 className="text-align-center">How it works?</h2>

        <div className="mt-60">
          <LandscapeCatalog imageUrl={work1} titleText="Setup your profile & preferences" bodyText="Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you." />


          <PortraitCatalog titleText="Try it on at home" bodyText="Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with."/>

          
          <LandscapeCatalog className="mt-50" imageUrl={work2} titleText="Try it on at home" bodyText="Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with." />

        </div>
      </div>
      <div className="text-align-center mt-100 mb-100">
        <Button type="lg-pink">Try It For Yourself</Button>
      </div>
    </div>
  )
}