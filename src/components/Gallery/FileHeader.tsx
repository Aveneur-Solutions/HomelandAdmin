import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

interface FileHeaderProps{
    file: File;
    onDelete: (file:File) => void;
}

const FileHeader = ({file, onDelete} : FileHeaderProps) => {
    return (
        <>
        <Grid columns="two">
            <Grid.Row>
                <Grid.Column>
                    {file.name}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                    <Button onClick={()=>onDelete(file)}>Delete</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}

export default FileHeader
