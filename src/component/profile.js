import React from 'react';

export default class Profile extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor');
    }

    render(){
        return(
            <div>
                <br/>
                <h2 className="title p-5">Hello this is the Profile.....</h2>
            </div>
        )
    }
}