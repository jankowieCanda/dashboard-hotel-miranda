import { Type as T } from "typescript";
import { Booking } from "./interfaces/bookinsInterfaces";



export function delayFunction(data: Object[] | void, delay: number = 500) {
    return new Promise<Object[] | void>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}