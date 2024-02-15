export const ChildComponent = (props) => {


    return (
            <>
            <button onClick={props.poziv}>Send {props.ispis}</button>
            </>
        
    )
}