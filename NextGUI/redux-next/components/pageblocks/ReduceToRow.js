

import {Button} from 'react-bootstrap'

function ReduceToRow() {
    return (
        <>
         {/*<!-- Reduce to Row -->*/}
      <div className="row align-items-start" id="reduceRow" >
        <div className="card mb-2 shadow-sm">
          <div className="card-body row">
            {/*<!-- Label -->*/}
            <div className="col-2 col-sm-3 col-md-2">
              <h6 className="card-title mt-2">Reduce to</h6>
            </div>
            {/*<!-- Middle -->*/}
            <div className="col">
              <div className="row gy-2">
                <div className="col-12 col-lg-6">
                  <div className="input-group">
                    <input type="text" id="reduceToAutocomplete" className="form-control" placeholder="Select problem"/>
                    <div className="input-group-append">
                      <span className="input-group-text">
                      <svg role="button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                      </svg>
                      <a id="reductionToInfo" tabIndex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Reduce to problem popover" data-bs-content="Problem not selected or problem not available">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle m-1" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                      </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="input-group">
                    <input type="text" id="reductionsAutocomplete" className="form-control" placeholder="Select reduction"/>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <a id="reductionInfo"tabIndex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Reductions popover" data-bs-content="Reduction not selected or problem not available">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle m-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Chevron -->*/}
            <div className="col-1"> 
              <div className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapseArea2" role="button" aria-expanded="false" aria-controls="collapseArea2"></div>
            </div>

            {/*<!-- Collapse -->*/}
            <div className="collapse" id="collapseArea2">
              <div className="row mt-3">
                <div className="col-2 col-sm-3 col-md-2">
                  <h7 className="text-muted mt-2">Instance:</h7>
                </div>
                <div className="col-2">
                  <Button type="button" className="btn btn-secondary" id="reduceButton">Reduce Button React</Button>
                </div>
                <div className="col-7 col-sm-6 col-md-7">
                  <div id="reduceInstanceText" className="text-muted"></div>
                </div>
                <div className="col-1">
                  <svg id="reduceButton" role="button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                    <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
        </>

    )
}
export default ReduceToRow;