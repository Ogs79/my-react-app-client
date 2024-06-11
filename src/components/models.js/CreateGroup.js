import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Context } from '../../index';
import { Dropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchBrands, createGroup } from '../../http/groupAPI';
import { useEffect } from 'react';
import { useState } from 'react';


const CreateGroup = observer(({ show, onHide }) => {
    const {group} = useContext(Context)
    const [name, setName] = React.useState('')


    useEffect(() => {
        fetchTypes().then(data => group.setTypes(data));
        fetchBrands().then(data => group.setBrands(data));
      }, []);

    const addGroup = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('typeId', group.selectedType.id)
        formData.append('brandId', group.selectedBrand.id)
        createGroup(formData).then(data => onHide()
        )
    }


    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <Dropdown className='mt-2 mb-2'>
                      <Dropdown.Toggle>{group.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                      <Dropdown.Menu>
                          {group.types.map(type =>
                              <Dropdown.Item onClick={() => 
                                group.setSelectedType(type)} 
                                key={type.id}>
                                  {type.name}
                              </Dropdown.Item>
                          )}
                      </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown  className='mt-2 mb-2'>
                      <Dropdown.Toggle>{group.selectedBrand.name || "Выберите уровень обучения"}</Dropdown.Toggle>
                      <Dropdown.Menu>
                          {group. brands.map(brand =>
                              <Dropdown.Item onClick={() => 
                                group.setSelectedBrand(brand)} 
                                key={brand.id}>
                                  {brand.name}
                              </Dropdown.Item>
                          )}
                      </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className='mt-3' 
                    placeholder={"Введите название группы"} 
                  />


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addGroup}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateGroup;
