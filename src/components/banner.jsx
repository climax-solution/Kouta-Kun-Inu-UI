import { useState } from "react";
import { Button } from "react-bootstrap";
import PresaleModal from "./presaleModal";

export default function Banner() {
    const [show, setShow] = useState(false);

    return (
        <div className="banner-container">
            <div className="banner-content text-center">
                <h1 className="fw-bold mx-auto">BNB Reflection HODL Reward <br/> Ecosystem Cryptocurrency</h1>
                {/* <p>Multichain Gaming Ecosystem for IGOs & IDOS Pre-Sales</p> */}
                <Button
                    className='primary-btn border-0 outline-0 mt-5'
                    onClick={() => setShow(true)}
                >Buy</Button>
                <PresaleModal
                    show={show}
                    onHide={() => setShow(false)}
                />
            </div>
        </div>
    )
}