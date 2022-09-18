import { Name } from "./name.interface";

export interface User
{
    user_id: string;

    name:    Name;

    phone_number:
    {
        number: string;

        extension: string;
    }
}