import React from 'react';

export default class Settings extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor');
    }

    render(){
        return(
            <div>
                <br/>
                <h2 className="title p-5">Hello this is the Settings Page.....</h2>
            </div>
        )
    }
}