import './App.css';
import BackgroundImages from './components/BackgroundImages';
import Commentator from './components/Commentator';
import HeroInfo from './components/HeroInfo';
import { commentatorsList } from './constants/commentatorsList';
import gsap from "gsap";
import { useLayoutEffect } from "react";


export default function App() {
  useLayoutEffect(() => {
   gsap.context(()=>{
    gsap.fromTo(
      ".odd",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      {
        opacity: 1,
        x: -50,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".even",
      {
        opacity: 0,
        x: -100,
        duration: 1,
      },
      {
        opacity: 1,
        x: 50,
        duration: 1,
      }
    );
   })
  }, []);
  
  return (
    <>
      <div className='wrapper'>
        <BackgroundImages />
        <div className='container'>
          <HeroInfo />
          <div className='commentators'>
            {commentatorsList.map((commentator, index) => {
              return <Commentator commentator={commentator} index={index} />
            })}
          </div>
        </div>

      </div>
    </>
  );
}


