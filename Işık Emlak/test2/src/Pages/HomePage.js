import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <><div><Helmet><title>Işık Emlak</title></Helmet></div>
        <div className="centered">
            <img src={window.location.origin + '/img/banner.png'} width="1300" />
        </div></>
    );
};

export default HomePage;