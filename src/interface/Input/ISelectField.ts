import React from "react";

export interface ISelectField {
    name: string;
    firstOption: string;
    secondOption: string;
    thirdOption: string;
    value?: string;
    onChange: React.ChangeEventHandler;
}