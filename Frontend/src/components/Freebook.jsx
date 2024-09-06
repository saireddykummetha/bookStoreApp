import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
    const filterdata=list.filter((data)=>
        data.category==='Free')
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
     
  return (
    <>
    <div  className='md:px-20 px-4'>
        <div>
     <h1 className='font-semibold text-x1 pb-2 '>Free Offered Courses</h1> 
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
    <Slider {...settings}>
        {filterdata.map((item)=>(
         <Cards item={item} key={item.id}/>   
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
