import React from 'react'
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { Card, Grid, IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface TrackItemsProps {
    track: ITrack;
    active?: boolean;
}

export const TrackItems: React.FC<TrackItemsProps> = ({ track, active = false }) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active
                    ? <PlayArrowIcon />
                    : <PauseIcon />
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} alt='foto' />
            <Grid container direction='column'>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
            </Grid>
            {active && <div> 02:32 / 03:42 </div>}
            <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
                <Delete />
            </IconButton>
        </Card>
    )
}
