import { Button, Grid, StepLabel, TextField } from '@mui/material'
import React from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'
import { MainLayout } from '../../layouts/MainLayout'

const Create = () => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [picture, setPicture] = React.useState(null)
    const [audio, setAudio] = React.useState(null)

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{ padding: 20 }}>
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Название трека"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Имя исполнителя"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Слова к треку"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept='image/*' >
                        <Button>Загрузите обложку</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept='audio/*' >
                        <Button>Загрузите дорожку</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create