

export function delayFunction(data: Object[] | void, delay: number = 500) {
    return new Promise<Object[] | void>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}