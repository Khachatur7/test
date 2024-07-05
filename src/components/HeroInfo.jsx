import { useLayoutEffect } from "react";
import { store } from "../constants/store";
import gsap from "gsap";

export default function HeroInfo({}) {

  useLayoutEffect(() => {
    gsap.context(()=>{
      gsap.fromTo(
        ".hero_title",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
        }
      );
      gsap.fromTo(
        ".hero_subtitle",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 1,
        }
      );
  
      gsap.fromTo(
        ".hero_info",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 1.2,
        }
      );
    })
  }, []);

  let num = ["20K+", "19.5K", "4.8/5"];
  let names = ["subscribers", "successful cases", "rating"];
  return (
    <div className="hero_content">
      <div className="hero_title">
        <span>Do you want to Learn more About cryptocurrencies</span>
        <div className="hero_title_with_color">
          <span>quickly and easily ?</span>
        </div>
      </div>
      <div className="hero_subtitle">
        <span>Subscribe to our channel to learn more</span>
      </div>
      <div className="info_blocks">
        {num.map((el, index) => {
          return (
            <div className="hero_info">
              <div className="num">
                <span>{el}</span>
              </div>
              <div className="name">
                <span>{names[index]}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="bttn">
        <span>JOIN WHATSAPP</span>
      </button>
      <div className="stores">
        {store.map((store) => {
          return (
            <div className="store">
              <div className="store_svg">
                <img src={store.img} alt="store_logo" />
              </div>
              <div className="store_text">
                <div className="store_description">
                  <span>{store.description}</span>
                </div>
                <div className="store_name">
                  <span>{store.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
