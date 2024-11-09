import React, { useEffect, useState } from 'react';
import animationData from '../JSON/Home.json';
import Lottie from 'react-lottie'
import { Col, Container, Row } from 'react-bootstrap';
import PersButton from './PersButton';
import { useTranslation } from 'react-i18next'

function Home() {

    const { t } = useTranslation();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        controls: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [renderVideo, setRenderVideo] = useState(true)

    useEffect(() => {
        
        const manejarRedimension = () => {
            if(window.innerWidth < 992) {
                setRenderVideo(false)
            } else {
                setRenderVideo(true)}
        };
      
          window.addEventListener('resize', manejarRedimension);

          manejarRedimension();
    }, [])

    return (
        <Container className="d-flex flex-row" style={{ width: 100 + 'vw', height: 100 + 'vh' }}>
            <Row>
                {renderVideo && <Col md={12} lg={8} className="d-flex align-items-center justify-content-center">
                    <Lottie
                        options={defaultOptions}
                        height={'auto'}
                        width={'auto'}
                    />
                </Col>}
                <Col md={12} lg={4} className="d-flex flex-column align-items-center justify-content-center">
                    <div class="description">
                        <p id="pTitulo">{t('title')}</p>
                        <h1>Matias Arriete</h1>
                        <p id="pDesarrollador">{t('web_developer')}</p>
                        <div class="cvConocerMas">
                            <PersButton
                                text={t('about_me')}
                                link={"#About_Me_Page"}
                            />
                            <PersButton
                                text={t('cv')}
                                link={"https://drive.google.com/file/d/1PdtMvIVxJ_td-ALDQxiHkjq-GRAT55IU/view?usp=sharing"}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;