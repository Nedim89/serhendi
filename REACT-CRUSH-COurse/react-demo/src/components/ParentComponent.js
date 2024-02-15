import { ChildComponent } from "./ChildComponent"
import {useState} from 'react'

export const ParentComponent = () => {
    const [brojac, setBrojac]=useState(0);
const handlerSetState = () => {
    
    setBrojac(brojac+1);
    console.log(brojac);
}
return <ChildComponent ispis={brojac} poziv={handlerSetState}/>

}