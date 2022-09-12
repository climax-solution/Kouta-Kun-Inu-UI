import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const _buy = 650000;
export default function PresaleModal(props) {
    const [bnb_amount, setBNBAmount] = useState('');
    const [kki_amount, setKKIAmount] = useState('');

    const changeBNB = (e) => {
        const _bnb = e.target.value;
        if (_bnb >= 0 && _bnb <= 3) {
            setBNBAmount(_bnb);
            setKKIAmount(_buy * _bnb);
        }

        if (_bnb > 3) {
            setBNBAmount(3);
            setKKIAmount(_buy * 3);
        }
    }

    const changeKKI = (e) => {
        const _kki = e.target.value;
        if (_kki >= 0) {
            if (_kki / _buy <= 3) {
                setBNBAmount(_kki / _buy);
                setKKIAmount(_kki);
            }

            if (_kki / _buy > 3) {
                setBNBAmount(3);
                setKKIAmount(_buy * 3);
            }
        }
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="presale-modal"
            centered
            >
            <Modal.Header>
                <Modal.Title id="presale-modal" className="text-center text-white w-100">
                    Buy Kouta Kun Inu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label className="text-12px">From</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="0.0"
                            type="number"
                            className="bnb-amount"
                            value={bnb_amount}
                            onChange={changeBNB}
                        />
                        <InputGroup.Text className="w-80px text-center d-block bg-transparent text-white">BNB</InputGroup.Text>
                    </InputGroup>
                </Form>
                <Form>
                    <Form.Label className="text-12px">To</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="0.0"
                            type="number"
                            className="bnb-amount"
                            value={kki_amount}
                            onChange={changeKKI}
                        />
                        <InputGroup.Text className="w-80px text-center d-block bg-transparent text-white">KKI</InputGroup.Text>
                    </InputGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="w-100">Buy Kouta Kun Inu</Button>
            </Modal.Footer>
        </Modal>
    )
}