import React from 'react'
import { useContext, useState,createContext, Component } from 'react'


export const ProblemContext = createContext();

const reduxBaseUrl = 'http://localhost:27000/'

class ProblemProvider extends Component {

    state = {
        
        problemJson: "DEFAULT",
        problemType: "NPC",
        problemName: "NODECOVER",
        problemInstance: "{{1,2,3},{1,2},GENERIC}",
        problemDescription: "Nodecover is a classic NP_Complete Problem",
        reduceToOptions: ["PROVIDERDEFAULT1", "PROVIDERDEFAULT2"],
        reduceTo: ["PROVIDERCHOSEN"]
    }
    setProblemName = (newName) => {
        //console.log(newName);
        this.setState({problemName:newName})
        //console.log(this.state.problemName)
        this.makeApiCallProblemInfo(newName.problemName)
        this.makeApiCallReduceToOptions(newName.problemName,this.state.problemType)
    
    }

    makeApiCallProblemInfo = (problemName) => {

       // URL for a problem and instance by user input 
       // reduxBaseUrl+`${problemName}Generic/instance?problemInstance=${problemInstance}`
        const req = apiFetch(reduxBaseUrl+problemName+'Generic/') 
           // `${problemName}Generic/instance?problemInstance=${problemInstance}`
        req.then(response => response.json())
            .then(data => {
                this.setProblemInstance(data.defaultInstance)
                this.setProblemJson(data.json())
                return data;
            })
            .then(data => this.setProblemDescription(data.formalDefinition + "\n\n" + data.problemDefinition))
            .catch((error) => { console.log("FETCH ERROR" + error) });
    }

  
    makeApiCallReduceToOptions = (problemName, problemType) => {
        console.log(problemName)
        const fullUrl = reduxBaseUrl+'Navigation/Problem_ReductionsRefactor/'+'?chosenProblem='+problemName+'&problemType='+problemType
     
        // URL to get problems to reduce to.
        // reduxBaseUrl+`Navigation/Problem_ReductionsRefactor/?chosenProblem=${problemName}&problemType=${problemType}`
        const req = apiFetch(fullUrl);
            
        req.then(response => response.json())

        // why is the problemInstance being set here
            .then(data => {
                this.setProblemInstance(data.defaultInstance)
                return data;
            })
            .then(data => this.setProblemReduceToOptions(data))
            .catch((error) => { console.log("FETCH ERROR" + error) });
    }



    // Setters
    setProblemInstance = (newInstance) => {
        this.setState({problemInstance:newInstance})
    }

    setProblemJson = (newProblem) => {
        this.setState({problemJson:newProblem})
    }

    setProblemDescription = (newDescription) => {
        this.setState({problemDescription:newDescription})
    }

    setProblemReduceTo = (newReduceTo) => {
        this.setState({ reduceTo: newReduceTo })
        console.log(newReduceTo)
    }

    setProblemReduceToOptions = (newReduceToOptions) => {
        this.setState({reduceToOptions: newReduceToOptions})
    }

    

    render() {
        return (
            <ProblemContext.Provider value={{
                //These functions (and above state values) are what consumers or useContext(ProblemInsance)  have access to.
                ...this.state,
                setProblemInstance: this.setProblemInstance,
                setProblemName: this.setProblemName,
                setProblemReduceTo:this.setProblemReduceTo,
                setProblemJson : this.setProblemJson,
                makeApiCall: this.makeApiCall,
            }}>
                {this.props.children}
            </ProblemContext.Provider>

        );
    }
    
}

async function apiFetch(url) {
    let request = await fetch(url)
    return request;
}

export default ProblemProvider