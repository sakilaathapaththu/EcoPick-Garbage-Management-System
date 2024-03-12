import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from '../Carousel/Item'
// import Slider_01 from '../../assets/images/slide01'
import SliderImage01 from '../../assets/images/slide05.jpg';
import SliderImage04 from '../../assets/images/slide04.jpg';


export default function Corousel() {
    var slider = [
        {
           
            image: SliderImage01, // Use imported image directly
            
        },
        {
           
            image: SliderImage04,
           
        }
    ];
    
  return (
    <div>
    <Carousel >
        {slider.map((item, i) => (
            <Item key={i} item={item} />
        ))}
    </Carousel>
</div>
  )
}
