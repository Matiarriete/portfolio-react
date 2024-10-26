import React from 'react';
import animationData from '../JSON/Home.json';
import Lottie from 'react-lottie'
import { Col, Container, Row } from 'react-bootstrap';
import PersButton from './PersButton';

function Home({language, setLanguage}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        controls: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                    />
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <div class="description">
                        <p id="pTitulo">{language === "ES" ? "Hola, mi nombre es" : "Hi, my name is"}</p>
                        <h1>Matias Arriete</h1>
                        <p id="pDesarrollador">{language === "ES" ? "Desarrollador Web" : "Web Developer"}</p>
                        <div class="cvConocerMas">
                            <PersButton
                                text={language === "ES" ? "Sobre Mi" : "About Me"}
                                link={"Prueba"}
                            />
                            <PersButton
                                text={language === "ES" ? "Aqui te dejo mi CV" : "Here I let you my CV"}
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