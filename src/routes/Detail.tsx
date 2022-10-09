import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Detail = (): React.ReactElement => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!location.state) {
            navigate('/')
        }
    }, [location.state, navigate])
    
    return (
        location.state
        ? <span>{location.state.title}</span>
        : <span></span>
    )
}

export default Detail
