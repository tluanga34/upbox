## Code Structure

A folder structure is maintained in a way to group like items together
<br>

#### Features
All page components are fall under this category. i.e Home Page and all other Navigation pages.
<br>

#### Components
All reusable elements are groupped in this folder. Components are divided into <b>Atom</b> and <b>Organisms</b>. Atoms are small components that have very minimal elements such as a single button. On the other components with larger elements are classified as Organisms
<br>

#### CSS
All helpers SCSS are grouped by scss_index.scss and attached to App.js. Instead of importing bootstrap helper classes, they are created per need basis in the scss/helpers folder.
<br>

#### Context
Multilayer of contexts are maintained. GlobalContext is the most outer context and this manage to maintain application wide settings such as theme info.
AuthContext is another layer as the child of globalContext which is configured to maintain userAuthentication state. 
<br>

#### SVGSpriteIcons
SVG Sprite Icons are generated using an online tool https://svgsprit.es/. All source svg files are stored in the assets/icons/svg_sprite_sources folder and this is not supposed to be imported in the code. When a new icon is needed, add that new svg icon into this folder, then upload it all to https://svgsprit.es/ to create an updated svg sprite, then download the svgSprite file. The SVGSprite is used as react component inside src/components/atoms/svg_sprite. Replace the sprite.svg file then it's ready for use.
```
<SvgSprite name="instagram" size="20"/>
```
Normally most icons are squares that means passing size props is sufficient as it translates as width and height.
But there are exceptional case where some icons are rectangular in shape i.e brand icon. If the icon is rectangular instead of passing size we can pass width and height
```
<SvgSprite name="instagram" width="150" height="50"/>
```
<br>

#### Images
Most Images that the page need are stored either in the features or components level. In the live scenario themse images are supposed to be stored in a CDN. 
<br>

#### How to start development
If you freshly cloned the repo run ```yarn``` in your termninal
To start the localserver type ```npm start```
<br>

#### Deployment
To generate a build, run ```npm run build```. You'll off course need to run ```yarn``` if you freshly cloned the repo.


#### Preview Demo
Check the code running here:
http://lalnun-assignment-upbox.s3-website.ap-south-1.amazonaws.com/


Cheers.......