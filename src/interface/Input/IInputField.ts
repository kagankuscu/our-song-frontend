import React from "react";

export interface IInputField {
    name: string;
    info: string;
    type: string;
    value?: string;
    onChange: React.ChangeEventHandler;
}