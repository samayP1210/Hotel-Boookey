import React from "react";
import './SlideShow.css'
export default function Slideshow(props) {
  const delay = 4000;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
        {/* <img className="slide" key={index} src={require(`${props.imgs[index]}`)} ></img> */}
        <img className="slide" key={index} src={`${props.imgs[index]}`} ></img>
    </div>
  );
}
