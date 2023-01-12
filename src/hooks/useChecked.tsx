import { useState } from "react"
import Switch from '@mui/material/Switch';

const useChecked = (label: String) => {

    const [state, setState] = useState(false)

    const SwitchOptions = () => (
        <>
            <label htmlFor={`${label}`}>{label}</label>
            <Switch id={`${label}`} checked={state} onChange={e => setState(e.target.checked)} />
            <label htmlFor={`${label}`}>{state ? 'Si' : 'No'}</label>
        </>
    )

    return [state, SwitchOptions]
}

export default useChecked