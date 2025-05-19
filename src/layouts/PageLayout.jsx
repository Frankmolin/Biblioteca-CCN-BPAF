import React from 'react'

export default function PageLayout({ children }) {
    return (
        <div className="flex flex-col min-h-auto">
            {children}
        </div>
    )
}
