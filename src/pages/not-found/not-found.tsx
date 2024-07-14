import LogoSartTrek from '@assets/StartTrekLogo.png';
import './not-found.css';

export const NotFound = () => {
  return (
    <div className="container">
      <h1 className="message">You are outside the habitable universe</h1>
      <img className="enterprise" src={LogoSartTrek} />
    </div>
  );
};
