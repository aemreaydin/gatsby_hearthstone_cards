import React, { useState, useEffect } from "react";
import Container from "@components/Container";
export default function Home() {
    const [, setName] = useState("");
    useEffect(() => {
        setName("Emre");
    }, [setName]);
    return (<Container>
      <h1>About Container Modules</h1>
    </Container>);
}
