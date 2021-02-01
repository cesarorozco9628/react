
import React from 'react'

const QuotesBox = ({quotes, author,ChangeText, color }) => {
    return(
    <div className="card m-5">
    <div className="card-header" >
      <h5 style = {{color:color}}>Author "{author}" </h5>
    </div>
    <div className="card-body">
      <p style = {{color:color}} className="card-text">
        {quotes}
      </p>
      <div className="row row justify-content-around">
      <button style = {{backgroundColor:color}} onClick={ChangeText} className="btn btn-primary btn-outline-light">
        Next
      </button>
      
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" style = {{backgroundColor:color}} className="btn btn-info btn-outline-light" >
          Share on Twitter
      </a>
      </div>
    </div>
  </div>
    )
}
export default QuotesBox;