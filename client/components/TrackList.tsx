import { Box, Grid } from '@mui/material'
import React from 'react'
import { ITrack } from '../types/track'
import { TrackItems } from './TrackItems'

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItems
                        key={track._id}
                        track={track}
                    />)}
            </Box>
        </Grid>
    )
}

export default TrackList