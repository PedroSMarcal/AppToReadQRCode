import React, { useEffect, useState } from "react";
import QRCode from 'qrcode'

export type proper = {
    text: string;
}

export default function QRCodeGenerator( { text }: proper ){
    const [src, setSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL(text).then((setSrc));
    }, [])

    return (
        <div>
            <img src={src} alt="" />
        </div>
    )
};

