import { Button } from "react-bootstrap";

function PersButton({text, link}) {

    return(
        <Button
                    onClick={() => {
                        window.location.href = link;
                    }}
                    className="m-2"
                    style={
                        { backgroundColor: "#e76958", 
                          borderColor: "#e76958" }}>
                    {text}
                    {console.log(link)}
        </Button>
    )

} 

export default PersButton;