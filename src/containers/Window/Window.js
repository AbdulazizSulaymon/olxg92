import React from 'react'
import WindowWrapper from './WindowWrapper'

const Window = ({ children }) => {
    return (
        <WindowWrapper>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <div className="rounded shadow window px-3 py-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </WindowWrapper>
    )
}

export default Window;
