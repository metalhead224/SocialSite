<<<<<<< HEAD
import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
=======
import React from 'react';
import {Dimmer, Loader} from "semantic-ui-react";
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583

interface Props {
    inverted?: boolean;
    content?: string;
}

<<<<<<< HEAD
export default function LoadingComponent({inverted= true, content = "Loading..."}: Props){
    return(
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content}/>
        </Dimmer>
    )
};
=======
export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
