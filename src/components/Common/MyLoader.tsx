import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const MyLoader = () => {
    return (
        <Segment size="massive">
            <Dimmer  active inverted >
                <Loader size="large" />
            </Dimmer>
        </Segment>
    )
}

export default MyLoader
