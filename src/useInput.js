import { useCallback, useState } from "react";

export default function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);
    const handleChange = useCallback((e) => { setValue(e.target.value) }, [])

    return [
        value,
        handleChange
    ];
}