import React, { useState, useEffect } from 'react'

interface NoInternetChildren {
    children: React.ReactNode;
}

const NoInternet: React.FC<NoInternetChildren> = (props) => {

    const [isOnline, setOnline] = useState<boolean>(true)

    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])

    window.addEventListener('online', () => {
        setOnline(true)
    })

    window.addEventListener('offline', () => {
        setOnline(false)
    })

    if(isOnline) {
        return <>{props.children}</>
    } else {
        return <h1>- Kamu Offline</h1>
    }
}

export default NoInternet