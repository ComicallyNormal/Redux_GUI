//redux.com/testpage
import React from 'react' //React is implicitly imported
import ProblemRow from '../components/pageblocks/ProblemRow'
import ProblemRowReact from '../components/pageblocks/ProblemRowReact'
import ReduceToRow from '../components/pageblocks/ReduceToRow'
import ReduceToRowReact from '../components/pageblocks/ReduceToRowReact'
import VisualizeRow from '../components/pageblocks/VisualizeRow'
import VisualizeRowReact from '../components/pageblocks/VisualizeRowReact'
import SolveRow from '../components/pageblocks/SolveRow'
import SolveRowReact from '../components/pageblocks/SolveRowReact'
import VerifyRow from '../components/pageblocks/VerifyRow'
import VerifyRowReact from '../components/pageblocks/VerifyRowReact'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import isulogo from '../components/images/ISULogo.png'
import SearchBar from '../components/widgets/SearchBar'

function TestPage() {

  const imgStyle = { textAlign: "center" }

  return (

    <div className="container my-5 ">

     <ProblemRowReact></ProblemRowReact>

        <ReduceToRowReact></ReduceToRowReact>
        
        <VisualizeRowReact></VisualizeRowReact>

        <SolveRowReact></SolveRowReact>

        <VerifyRowReact></VerifyRowReact>
        

        {/*<!-- /Container-->*/}

       <footer className='centerImage'>
        <Image src={isulogo} width={400} height={200} style = {imgStyle}></Image>     
        </footer>
    </div> 

                    
    )
}
export default TestPage