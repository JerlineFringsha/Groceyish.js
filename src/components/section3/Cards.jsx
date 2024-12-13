import PropTypes from 'prop-types';
import {
  BsFillArrowRightCircleFill

} from "react-icons/bs";const Cards = ({label, header, text, btn, bgColor}) => {
  return (
    <div>
            <span className={`${bgColor} p-2 rounded `}>{label}</span>
            <h3 className="text-black leading-relaxed text-4xl">{header}</h3>
            <p className="text-black leading-relaxed">{text}</p>
            <div className={` ${bgColor} rounded-md inline-flex items-center`}>
            <a href="#" className="flex flex-row  items-center p-2  text-white">             
              <p className={` ml-2`}>{btn} </p>
              <BsFillArrowRightCircleFill className='ml-2'/>
            </a>
            
          </div>
          
            
    </div>
  )
}
Cards.propTypes={
    label:PropTypes.string,
    header:PropTypes.string,
    text:PropTypes.string,
    btn:PropTypes.string,
    bgColor:PropTypes.string,
};

export default Cards
