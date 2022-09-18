import { User } from "../interface/user.interface";
import { is_in_the_past } from "./in-the-past.function";


export function is_reserved(reserved_by: string | undefined, reserved_until: string): boolean
{
    return !!reserved_by && !is_in_the_past(reserved_until);
}