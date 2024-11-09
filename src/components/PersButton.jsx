import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

function PersButton({ text, link }) {

    const checkLink = String(link).startsWith('#')

    const styleButton = {
        backgroundColor: "#e76958",
        borderColor: "#e76958"
    }

    return (
        <div>
            {checkLink &&
                <Link to={String(link).substring(1)} smooth={true} duration={500}>
                    <Button style={styleButton}>
                        {text}</Button>
                </Link>}

            {!checkLink && <Button
                onClick={() => {
                    window.location.href = link;
                }}
                className="m-2"
                style={
                    {
                        backgroundColor: "#e76958",
                        borderColor: "#e76958"
                    }}>
                {text}
            </Button>}
        </div>
    )

}

export default PersButton;