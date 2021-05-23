import React from 'react';

export default class Fallback extends React.Component {

    state = {isError: false};
    
    componentDidCatch(error){
        this.setState({isError:true})
    }

    render() {
            return <div>
                Network Error Occured.
                Please Re Run this page or 
                contact the support Team.
            </div>
    }
}