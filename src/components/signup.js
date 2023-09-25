import React from 'react'

export default function signup() {
  return (
    <div>
        <div class="card mt-5 shadow">
            <div class="card-header bg-info">Enter Name</div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">First Name<span style={{color:"red"}} > *</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter first name"/>
                    </div>
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">Middle Name<span style={{color:"red"}} > *</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter middle name"/>
                    </div>
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">Last Name<span style={{color:"red"}} > *</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter last name"/>
                    </div>
                </div>
            </div>
            <div class="card-footer">Footer</div>
        </div>
    </div>
  )
}
