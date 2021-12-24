import React, { Component } from 'react'

export class Score extends Component {
    getClassName(){
        const otherClasses = "score"

        if(this.props.score >= 80)
            return otherClasses + " high-score"

        if(this.props.score >= 50)
            return otherClasses + " medium-score"

        return otherClasses + " low-score"
        
    }
    
    render() {
        return (
            <div className={this.getClassName()}>{this.props.score}</div>
        )
    }
}

export default Score
