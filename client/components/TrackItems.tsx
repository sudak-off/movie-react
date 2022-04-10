import React from 'react'
import { ITrack } from '../types/track';

interface TrackItemsProps {
    track: ITrack;
    active?: boolean;
}

export const TrackItems: React.FC<TrackItemsProps> = ({ track, active = false }) => {
    return (
        <div>
            {track.name}
        </div>
    )
}
