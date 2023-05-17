import React, { useState } from 'react';

export default function Index() {
    const [createObjectURL, setCreateObjectURL] = useState(null);

    return (
        <>
            <input type="file" name="myImage" accept="image/*" onChange={async (event) => {
                if (event.target.files && event.target.files[0]) {
                    const i = event.target.files[0];

                    setCreateObjectURL(URL.createObjectURL(i));
                    const body = new FormData();
                    body.append("file", i);
                    const response = await fetch("/api/uploadImage", {
                        method: "POST",
                        body
                    });
                    const json = await response.json();
                }
            }} />
        </>
    );
};