import React from 'react'
import './Shows.css'
import { Container } from 'react-grid-system'

class Shows extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>
            <div className="shows-container">
                <Container>
                    <div className="imprensa-div">
                        <h1 className="title-imprensa">SHOWS</h1>
                        <h3 className="subtitle-imprensa">Em breve</h3>
                    </div>
                </Container>
            </div>
            </>
        )
    }
}
export default Shows