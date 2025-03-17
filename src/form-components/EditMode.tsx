import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
            />
            {editMode ?
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="Student?"
                        checked={student}
                        onChange={() => {
                            setStudent(!student);
                        }}
                    />
                </Form.Group>
            :   <div>
                    {name} is {student ? "" : "not "}a student
                </div>
            }
        </div>
    );
}
