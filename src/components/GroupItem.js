import React from "react";
import { Col, Card, Image } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import { GROUP_ROUTE } from "../utils/consts";

const GroupItem = ({ group }) => {
    const history = useHistory();
    return (
        <Col md={4} className={"mb-3 mt-3"} onClick={() => history.push(GROUP_ROUTE + '/'+ group.id)}>
            <Card style={{ width: '100%', cursor: 'pointer', padding: '20px' }} border="light">
                <div className="text-black-50 d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        <div style={{ fontSize: '1.2em' }}>{group.rating}</div>

                    </div>
                </div>
                <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                    {group.name}
                </div>
            </Card>
        </Col>
    );
};

export default GroupItem;
