import React from 'react'
import Server from 'react-dom/server'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAngry } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGoogle, faInfo, faAngry)

let Greet = () => {
    return <div>
        <FontAwesomeIcon icon="info" />
        <FontAwesomeIcon icon="angry" />
        <FontAwesomeIcon icon="google"/>
    </div>
}

console.log(Server.renderToString(<Greet />))