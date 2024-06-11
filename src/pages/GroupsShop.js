import React, { useEffect } from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import GroupList from "../components/GroupList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes } from "../http/groupAPI";
import { fetchBrands } from "../http/groupAPI";
import { fetchGroups } from "../http/groupAPI";
import Pages from "../components/Pages";

const GroupsShop = observer(() => {
  const { group } = React.useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => group.setTypes(data));
    fetchBrands().then(data => group.setBrands(data));
    fetchGroups(
        null,
        null,
        2,
        2

    ).then(data => {
        group.setGroups(data.rows);
        group.setTotalCount(data.count);
    });
  }, []);

    useEffect(() => {
        fetchGroups(
            group.selectedType.id,
            group.selectedBrand.id,
            group.page,
            5
        ).then(data => {
            group.setGroups(data.rows);
            group.setTotalCount(data.count);
        });
    }, [group.page, group.selectedType, group.selectedBrand]);



    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <h4>Фильтры</h4>
                    <TypeBar />
                    <BrandBar />
                </Col>
                <Col md={9}>
                    <GroupList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});


export default GroupsShop;