import { observer } from "mobx-react-lite";
import React from "react";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";


const BrandBar = observer(() => {
    const { group } = useContext(Context);

    return (
        <Row className="d-flex">
            {group.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className="p-3"
                    onClick={() => group.setSelectedBrand(brand)}
                    border={brand.id === group.selectedBrand.id ? 'black' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;