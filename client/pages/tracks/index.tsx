import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'track 1',
            artist: 'artyom',
            text: 'ehal cat zadom',
            listens: 5,
            picture: 'http://localhost:3000/audio/3332.jpg',
            audio: 'http://localhost:3000/audio/333.mp3',
            comments: [],
        },
        {
            _id: '2',
            name: 'track 2',
            artist: 'lena',
            text: 'cat or dog',
            listens: 2,
            picture: 'http://localhost:3000/audio/33322.jpg',
            audio: 'http://localhost:3000/audio/3133.mp3',
            comments: [],
        },
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index