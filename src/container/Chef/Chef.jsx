import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__bg app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">Ehat We Belive In</h1>


      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={ images.quote } alt="quote" />
          <p classNam="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam explicabo possimus molestiae illo! Voluptatem deserunt saepe fuga reprehenderit harum dolor aperiam vitae, nemo animi totam eveniet doloremque, molestias itaque mollitia!</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi molestias velit ipsa accusamus? Consequuntur atque exercitationem dolorem, soluta quae, id non odit omnis molestiae ad aliquid sit? Itaque, ea.</p>
        </div>   
        <div className="app__chef-sign">
          <p>Kelvin Luo</p>
          <p className="p__opensans">chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
     </div>

  </div>
);

export default Chef;
