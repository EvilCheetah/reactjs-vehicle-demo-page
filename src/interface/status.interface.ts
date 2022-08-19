import { StatusType } from "../types/status.type";


export interface Status
{
    status:       StatusType;

    location:     string;

    last_updated: string;
}