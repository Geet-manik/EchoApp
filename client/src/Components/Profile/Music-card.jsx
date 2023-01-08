import playerlogo from './Player-logo.png';

import './Profile.css';
const Card = () => {
    return (
        <>
            <div className="Music-song">
                <div className="Music-card">
                    <img src={playerlogo} alt="" />
                </div>
                <div className="Music-card-details">
                    <div>Highway to Hell</div>
                    <div className="Music-card-details-timing">
                        <div>AC-DC</div>
                        <div>3:42</div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
