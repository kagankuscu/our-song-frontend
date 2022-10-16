import { PaginateModel } from "./PaginateModel";

export interface ResponseModel {
    lenght: number,
    result: PaginateModel,
    status: number
}