export const ListElement = ({ amount, customStyle, id, clickHandler, selected }) => {
    const styling = {
        display : 'block',
        height : '25px',
        width : '200px',
        textAlign: 'center',
    };
    if(selected)
        styling.backgroundColor = 'red';


    return (
        <div style={{...styling, ...customStyle}} onClick={()=>clickHandler(id)}>
            <span> Amount :</span>
            <span> {amount} - {selected?selected:""}</span>
        </div>
    );
};
