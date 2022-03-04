import React, { useEffect, useState } from "react";
import QRCode from 'qrcode'

// the type of params receive to qr code
type proper = {
    id: string;
}

export default function QRCodeGenerator( { id }: proper ){
    // Here I state the function that will receive and show the component to return the QRCode
    const [src, setSrc] = useState('');

    // remember that this method used is to redirect to an route;
    // to read more about this check the URL: https://www.npmjs.com/package/qrcode
    useEffect(() => {
        QRCode.toDataURL(`localhost:3333/authenticateticket/${id}`).then((setSrc));
    }, [])

    return (
        <div>
            <img src={src} alt="no image" />
        </div>
        )
};