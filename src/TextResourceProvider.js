import React, {useContext} from 'react';

import TextResourceContext from './TextResourceContext';

export default ({children}) => {

    const resources = {
        hello: 'Hello world',
        hello2: 'Hello 2nd world'
    };

    return <TextResourceContext.Provider value={resources}>
        {children}
    </TextResourceContext.Provider>
}