import { Button } from "react-bootstrap";

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-content text-center">
                <h1 className="fw-bold mx-auto">Metaverse Web 3.0 <br/> Gamng Launchpad & IGO</h1>
                <p>Multichain Gaming Ecosystem for IGOs & IDOS Pre-Sales</p>
                <Button className='primary-btn border-0 outline-0 mt-5'>Explore IGOs</Button>
            </div>
        </div>
    )
}