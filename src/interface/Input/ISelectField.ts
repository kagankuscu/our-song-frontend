import React from "react";

export interface ISelectField {
    name: string;
    firstOption: string;
    secondOption: string;
    onChange: React.ChangeEventHandler;
}