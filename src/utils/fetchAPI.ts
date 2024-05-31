
const URL: string = import.meta.env.VITE_LOCAL_BASE_URL;

export async function fetchAPI(path: string, method: string = 'GET', body: any = null){
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN);
    const response = await fetch(`${URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: body !== null ? JSON.stringify(body) : null
    });
    const data = await response.json();
    return data;
}