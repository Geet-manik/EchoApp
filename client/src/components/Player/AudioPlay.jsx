import Audioimage from '../../assets/images/Player.svg';
import '../../assets/styles/Audioplay.css';
import Audiocontroller from './AudioController';
import useFetch from '../../features/usefetch';
import { useParams } from 'react-router-dom';

const Audioplay = ({ audioRef, progressBar }) => {

    const { id } = useParams();
    const { data } = useFetch(`/audio/${id}`);
    return (
        <>
            {data && (
                <div className="Audioplay-main">
                    <div className="Audioplay-image">
                        <img src={Audioimage} alt="" />
                    </div>
                    <div className="Audioplay-details">
                        <div className="Audioplay-details-playing">
                            Now Playing
                        </div>
                        <div className="Audioplay-details-audioname">
                            <div>{data?.title}</div>
                            <div className="Audioplay-details-audiosinger">
                                {data?.author.name}
                            </div>
                        </div>
                        <div className="Audioplay-controller">
                            <Audiocontroller
                                data={data}
                                audioRef={audioRef}
                                progressBar={progressBar}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Audioplay;
