import React from 'react'

export default function About() {
    return (
        <section id="about" className="py-md-5">
         <div>
           <h1 className="text-center my-5 text-primary fw-bold">About us</h1>
           <hr/>
         </div>
         <div className="d-flex container my-5">
           <div className="text w-50 my-auto">
              <h3 className="text-primary fw-bold">Let's Know About Us</h3>
              <p>HAP Is Here With The Lowest Rate Health Plans For Small Businesses & Award Winning Service. Plan Types Include HMO, PPO, EPO, Consumer-Driven & Virtual Care Health Plans. Call Now. HAP. Keep Employees Healthy. Call To Talk To An Expert. Talk To Your Agent. Small Business Insurance. Flexible Plans. Compare Plan Options. Insurance coverage: HMO, PPO, EPO, Virtual Plans.</p>
           </div>
           <div className="text w-50 p-md-5">
             <img width="100%" src="images/about-icon-leaders-01.png" alt=""/>
           </div>
         </div>
       </section>
    )
}
