import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const MyLoader = () => {
    return (
        <Segment>
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        </Segment>
    )
}

export default MyLoader
