import { useAppStore } from '../stores/useAppStore';
import { ListElement } from './ListElement';

export const ListMovements = () => {
    const { movements, setMovements } = useAppStore();

    let fixedStyle = false;
    const blueRow = { backgroundColor : '#445566' };
    const greenRow = { backgroundColor : '#556644' };

    const setSelected = (index) => {
        const movement = movements[index];
        movement.selected = true;
        movements[index] = movement;
        setMovements(movements);
    };


    return (
        <div style={{ width : '250px', margin : 'auto'}}>
            {movements && movements.map((it) => {
                fixedStyle = !fixedStyle;
                return <ListElement 
                    amount={ it.amount } 
                    key={ it.key } 
                    id={ it.key } 
                    customStyle={ fixedStyle ? blueRow : greenRow } 
                    selected={it.selected}
                    clickHandler={setSelected}
                    />
                })}
        </div>
    );
};