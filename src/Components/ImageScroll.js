import { useState, useRef, useEffect } from "react";
import Family from "../Images/lions-family.jpg";
import Cub from "../Images/babylion.jpg";
import Boat from "../Images/lion-boat.jpg";
import Grass from "../Images/lion-on-grass.jpg";
import Smoke from "../Images/lion-smoking.jpg";


const ImageScroll = () => {
const[display, setDisplay] = useState({
  elements: [
     Family,
     Cub,
     Boat,
     Grass,
     Smoke,
  ]
});

const[page, setPage] = useState(1);

const scroll = useRef(null);

useEffect(() => {
  const viewer = new IntersectionObserver(handleViewer);
  if(scroll.current){
    viewer.observe(scroll.current)
  }
}, []);

useEffect(() => {
  const newElements = display.elements.concat([
    Family,
     Cub,
     Boat,
     Grass,
     Smoke,
  ])
  setDisplay({
    elements: newElements
  });
}, [page]);


//define handleViewer
const handleViewer = (items) => {
  const currItem = items[0];
  if(currItem.isIntersecting){
    setPage((page) => page + 1);
  }
};

const pictures = display.elements.map((element, index) => {
  return( <div className="imageContainer" key={index}>
            <img src={element} alt="Lion images"/>
         </div>
         )
})
  
return (
    <div className="displayImage"> 
      <div className="images">
      {pictures}
      </div>
      <div ref={scroll}></div>
    </div>
  )
};

export default ImageScroll;