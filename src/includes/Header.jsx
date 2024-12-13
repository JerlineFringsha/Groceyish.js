import PropTypes from 'prop-types';
const Header = ({title}) => {
  return (
    <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-primary text-2xl">CAUROSEL ON PROGRESS</p>
      
    </div>
  )
}
Header.propTypes={
    title:PropTypes.string,
    
};

export default Header
