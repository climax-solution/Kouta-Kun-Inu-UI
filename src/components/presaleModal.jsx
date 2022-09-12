import { useState } from "react";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import Web3 from "web3";
import { NotificationManager } from "react-notifications";
import abi from "../constants/abi.json";
import "react-notifications/lib/notifications.css";

const _buy = 650000;
export default function PresaleModal(props) {
    const [bnb_amount, setBNBAmount] = useState('');
    const [kki_amount, setKKIAmount] = useState('');
    const [isConnected, setConnected] = useState(false);
    const [isLoading, setLoading] = useState(false);

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

    const buy = async() => {
        setLoading(true);
        try {
            if (!bnb_amount || !kki_amount) throw Error();
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setConnected(true);
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abi, process.env.REACT_APP_TOKEN_ADDRESS);
            await contract.methods.buy().send({
                value: web3.utils.toWei(bnb_amount, 'ether'),
                from: accounts[0]
            });
            NotificationManager.success("Success");
        } catch(err) {
            console.log(err);
            NotificationManager.error("Failed");
        }
        setBNBAmount('');
        setKKIAmount('');
        setLoading(false);
    }

    return (
        <>
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
                    <Button onClick={buy} className="w-100" disabled={isLoading}>
                        { !isLoading ?
                            <span>Buy KKI {isConnected ? "(Connected)" : "(Not Connected)"}</span>
                            : <Spinner animation="border" variant="light" />
                        }
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}