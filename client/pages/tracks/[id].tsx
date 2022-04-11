import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: 'track 1',
        artist: 'artyom',
        text: 'ehal cat zadom',
        listens: 5,
        picture: 'http://localhost:3000/audio/3332.jpg',
        audio: 'http://localhost:3000/audio/333.mp3',
        comments: [],
    }

    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}
            >К списку
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} alt='pic' width={200} height={200} />
                <div style={{ marginLeft: 30 }}>
                    <h2>Название трека - {track.name}</h2>
                    <h2>Исполнитель - {track.artist}</h2>
                    <h2>Прослушано - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Слова к тексту</h2>
            <p>{track.text}</p>
            <h2>Комментарии</h2>
            <Grid container>
                <TextField
                    label='Ваше имя'
                    fullWidth
                />
                <TextField
                    style={{ marginTop: 20 }}
                    label='Комментарий'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {commnet.text}</div>
                    </div>
                )}
            </div>
        </MainLayout >
    )
}

export default TrackPage