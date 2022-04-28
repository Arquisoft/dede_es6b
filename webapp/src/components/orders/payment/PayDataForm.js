import { Modal, Popover } from "@mui/material";
import React from "react";
import { ModalBody, ModalHeader } from "reactstrap";
import  { useState } from 'react';
import { Button} from "@mui/material";

const { FormGroup } = require("@material-ui/core");

export const CreditCard = () => {
    const [popupVisible, setPopupVisible] = useState<Boolean>(false)

    function togglePopup() {
        setPopupVisible(!popupVisible)
    }
    return (
        <>
        <Button onClick={togglePopup}>Mostrar popUp</Button>
            <Modal isOpen={popupVisible}>
                <ModalHeader>Datos de tu tarjeta</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Número de tarjeta</label>
                        <input type="text" value="Ej:5540 2345 1234 4456"></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Código de seguridad</label>
                        <input type="text" value="Ej:448"></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Nombre del titular</label>
                        <input type="text" value="María Álvarez Pérez"></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de caducidad</label>
                        <input type="text" value="05/2023"></input>
                    </FormGroup>
                </ModalBody>
            </Modal>
        </>
    );
 }

