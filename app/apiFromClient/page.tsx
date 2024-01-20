"use client"

import { useEffect, useState } from "react";

export default function page() {
    const [name, setName] = useState<string>();
    useEffect(() => {
        fetch("/api/whoAmI")
        .then(res => res.json())
        .then(data => setName(data.name))
    }, []);

    return (
        <div>
            <div>API Route From <b>Client</b></div>
            <div>Name: {name}</div>
        </div>
    );
}
