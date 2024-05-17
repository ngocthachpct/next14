import React, { useState } from "react";
import { Button, Input, Row, Col } from "antd";

export default function HookUsage() {
    return (
        <Row gutter={8} align="middle" style={{ maxWidth: "320px" }}>
            <Col>
                <Button>+</Button>
            </Col>
            <Col>
                <Input value={0} style={{ textAlign: "center" }} />
            </Col>
            <Col>
                <Button>-</Button>
            </Col>
        </Row>
    );
}
