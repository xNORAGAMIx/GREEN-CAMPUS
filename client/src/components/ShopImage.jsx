/* eslint-disable react/prop-types */
import Button from './Button';

function ImageComponent({ src, alt, caption,date, about }) {
  return (
     <div >
    <figure>
      <img className='mb-8 rounded-3xl lg:h-96' src={src} alt={alt} />
      <figcaption className='mb-4 text-4xl font-bold'>{caption}</figcaption>
      <p className='mb-3 text-xl'>{date}</p>
      <p className='mb-8 text-2xl'>{about}</p>
    </figure>
    <Button text="Shop!"/>
    </div>
  );
}

export default ImageComponent;