import { useState, useEffect } from "react";
import "../styles/carousel.css"
import {AiFillRightCircle} from "react-icons/ai"
import {AiFillLeftCircle} from "react-icons/ai"

const Carousel = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
    }, 3000)
    return () => clearInterval(changeImage);
  }, [currentIndex, data.length])


  const handleNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
  }

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1)
  }

  return (
    <div>
      {data.map((item:any, index:any) => (
        <div key={index} className="image_container">
          <img
            src={item.img}
            alt={item.text}
            className={currentIndex === index ? "active" : ""}
            style={{
              display: currentIndex === index ? "block" : "none",
              height: "100vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <p className="carousel_text">
            {currentIndex === index ? item.text : ""}
          </p>
        </div>
      ))}
      <div className="carousel_btn">
        <p onClick={handlePrev}>
          <AiFillLeftCircle size={50} color={"rgb(40, 40, 238)"} />
        </p>
        <p onClick={handleNext}>
          <AiFillRightCircle size={50} color={"rgb(40, 40, 238)"} />
        </p>
      </div>
    </div>
  );
};

export default Carousel;
