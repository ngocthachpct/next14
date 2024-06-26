import React, { useState, useCallback } from "react";
import { Button, Input, Row, Col } from "antd";

const HookUsage: React.FC = () => {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => {
        setValue(prevValue => prevValue + 1);
    }, []);

    const decrement = useCallback(() => {
        setValue(prevValue => prevValue - 1);
    }, []);

    return (
        <Row gutter={8} align="middle">
            <Col>
                <Button onClick={increment} style={{border: "1px solid black", backgroundColor: "#EEEEEE"}}>+</Button>
            </Col>
            <Col>
                <Input value={value} readOnly style={{ textAlign: "center", maxWidth: "6vw" }} />
            </Col>
            <Col>
                <Button onClick={decrement} style={{border: "1px solid black", backgroundColor: "#EEEEEE"}}>-</Button>
            </Col>
        </Row>
    );
}

export default HookUsage;
