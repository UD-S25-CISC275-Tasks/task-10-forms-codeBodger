import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "White",
    "Silver",
    "Gray",
    "Black",
    "Red",
    "Maroon",
    "Yellow",
    "Olive",
    "Lime",
    "Green",
    "Aqua",
    "Teal",
    "Blue",
    "Navy",
    "Fuchsia",
    "Purple",
];
type Color = (typeof colors)[number];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<Color>("Red");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((v) => (
                    <Form.Check
                        type="radio"
                        name="colors"
                        onChange={() => {
                            setColor(v);
                        }}
                        key={v}
                        label={v}
                        value={v}
                        checked={color === v}
                        style={{
                            backgroundColor: v,
                            display: "inline-block",
                            padding: "3px 1em 3px 2em",
                            margin: "0 3px",
                        }}
                    />
                ))}
            </Form.Group>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
