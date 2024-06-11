import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/groupAPI';


const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = React.useState('');

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            onHide();
        });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить уровень обучения
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название уровня обучения"} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
