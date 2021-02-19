import React from 'react'

const Container = ({ children, bg_img }) => (
    <main className="app-container" style={{ backgroundImage: `url("${bg_img}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'blur(0.5px)' }}>
        {children}
    </main>
)

export default Container