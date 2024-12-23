import { useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';
//import { useMovement } from '../hooks/useMovement';
import { ListMovements } from '../components/ListMovements';
import { useGetMovements } from '../hooks/useGetMovements';

export const Home = () => {
    const { movements } = useAppStore();
    useGetMovements();

    return (
        movements && <ListMovements/> 
    );
};