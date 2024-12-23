import { useEffect } from "react";
import { useAppStore } from '../stores/useAppStore';
import axios from 'axios';

const useGetMovements = () => {
    const { movements, setMovements } = useAppStore();

    useEffect(() => {
        if( null === movements) {
            axios
            .get('http://localhost:5000/movements')
            .then((response) => {
                setMovements(response.data);
            })
            .catch((error) => {
                console.log('Error when getting movements %s', error);
            });
        }
    }
    , []);
};

export { useGetMovements }