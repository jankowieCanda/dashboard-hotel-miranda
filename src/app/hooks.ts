import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { JsTyping, Type } from 'typescript';

const LOCAL_URL: string = import.meta.env.VITE_LOCAL_BASE_URL;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export async function FetchAPI(path: string, method: string = 'GET', body: any = null){
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN);
    const response = await fetch(`${LOCAL_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: body !== null ? JSON.stringify(body) : null
    });
    const data = await response.json();
    console.log(`${LOCAL_URL}${path}`)
    return data;
}