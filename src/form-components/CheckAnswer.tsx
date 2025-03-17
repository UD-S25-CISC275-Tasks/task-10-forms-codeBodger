import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateUserAnswer} />
            </Form.Group>
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
