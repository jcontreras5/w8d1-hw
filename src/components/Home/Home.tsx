//1.1 access to framework
import React from 'react'; 

//1.2 create functional comp:prop is child/attr of comp
interface Props{
    title: string;
}

//1.3 exporting for use around the rest of project,hence export
export const Home = ( props:Props) => { 
    return (
        <div>
            Jonathan C.
        </div>
    )
}