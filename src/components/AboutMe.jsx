import { Row, Container, Col, Image} from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import profileImage from '../images/profile.png';

function AboutMe() {

    const { t } = useTranslation();
    const formattedText = t('presentation').replace(/\\n/g, '\n');


    return (
        <div id="About_Me_Page"className="p-5" style={{ background: '#e76958' }}>
            <h2 id="tituloSobreMi">{t('about_me')}</h2>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
            }} />
            <Container className="d-flex flex-row">
                <Row>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <p style={{ whiteSpace: 'pre-wrap' }}>{formattedText}</p>
                    </Col>
                    <Col xs={12} md={{span: 4, offset:2}}>
                        <Image src={profileImage} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;