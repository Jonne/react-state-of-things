import React, {useContext} from 'react';

import TextResourceContext from './TextResourceContext';

function ResourcedText ({resourceKey}) {
    const context = useContext(TextResourceContext);

    const message = context[resourceKey];

    return <React.Fragment>
        {message}
    </React.Fragment>
}

export default ResourcedText;