import Button from "../../components/atoms/form_elements/Button/Button";
import Banner from "../../components/organisms/banner/Banner";
import LandscapeCatalog from "../../components/organisms/cards/catalog/LandscapeCatalog";
import PortraitCatalog from "../../components/organisms/cards/catalog/PortraitCatalog";
import style from "./Home.module.scss";

import work1 from "./images/work1.png"
import work2 from "./images/work2.png"
import work2Art from "./images/work2-art.png"
import work3 from "./images/work3.png"
import PageHeaderText from "../../components/atoms/page_header_text/PageHeaderText";

export default function Home() {
  document.title = "Home";

  return (
    <div>
      <Banner />
      <div className={style.catalogueContainer}>

        {/* <h2 className="text-align-center">How it works?</h2> */}

        <PageHeaderText text="How it works?" className="text-align-center"/>

        <div className="mt-60">
          <LandscapeCatalog imageUrl={work1} titleNumber="1" titleText="Setup your profile & preferences" bodyText="Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you." />


          <PortraitCatalog className="mt-150" titleNumber="2" imageUrl={work2} bgImageUrl={work2Art} titleText={<div><p>Review your</p><p>custom box</p></div>} bodyText="Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house." />


          <LandscapeCatalog className="mt-100" titleNumber="3" imageUrl={work3} titleText="Try it on at home" bodyText="Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with." />

        </div>
      </div>
      <div className="text-align-center mt-100 mb-100">
        <Button type="lg-pink">Try It For Yourself</Button>
      </div>
    </div>
  )
}