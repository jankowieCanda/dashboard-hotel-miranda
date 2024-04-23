

export function delayFunction(data, delay = 500) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, [delay]);
    })
}