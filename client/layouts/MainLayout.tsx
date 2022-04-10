import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

export const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{ margin: '90px 0' }}>
                {children}
            </Container>
        </>
    )
}
