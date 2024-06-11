import React from "react";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import GroupItem from "./GroupItem";
import { useContext } from "react";
import { Context } from "../index";

const GroupList = observer(() => {
    const { group } = useContext(Context);
    return (
        <Row className="d-flex justify-content-start">
            {group.groups.map(group => (
                <GroupItem key={group.id} group={group} />
            ))}
        </Row>
    );
});

export default GroupList;
