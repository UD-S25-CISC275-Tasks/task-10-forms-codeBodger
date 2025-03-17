import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Attempts remaining: {attemptsLeft}</h4>
            <Form.Group>
                <Form.Label>Use/Gain Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsReq(event.target.value);
                    }}
                />
                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                    disabled={attemptsLeft <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        setAttemptsLeft(
                            attemptsLeft + (parseInt(attemptsReq) || 0),
                        );
                    }}
                >
                    gain
                </Button>
            </Form.Group>
        </div>
    );
}
