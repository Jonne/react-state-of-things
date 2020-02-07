import React, {useState, useEffect} from 'react';
import getData from './DataService';

export default () => {
    const [name, setName] = useState('');

    useEffect(() => {
        var response = getData();

        setName(response.name);
    }, []);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return <div>
        <input value={name} onChange={handleNameChange} />
    </div>
}