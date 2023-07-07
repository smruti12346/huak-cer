import React from 'react'

function Cta() {
  return (
    <>
     

      {/*===========================
        Start CTA
===========================*/}
      <section className="call_to_action">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 col-xs-12">
              <h1>No overtime charges, 7 days a week</h1>
            </div>{/*end .col-md-9*/}
            <div className="col-md-3 col-sm-4 col-xs-12 text-right cta_responsive_left">
              <a href className="btn-gray">GET A FREE QUOTE</a>
            </div>{/*end .col-md-3*/}
          </div>{/*end .row*/}
        </div>{/*end .container*/}
      </section>{/*end .call_to_action*/}
      {/*===========================
        end CTA
===========================*/}
 
    </>
  )
}

export default Cta
