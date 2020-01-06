import React, { Component } from 'react';


export default class Add extends Component {
    render() {
        return (
           <div>
<form>
  <div className="form-group">
    <label for="categor_name">Categor Name</label>
    <input type="text" class="form-control" id="categor_name" aria-describedby="emailHelp" placeholder="Enter category"/>
  </div>
    
  <button type="submit" class="btn btn-primary">Submit</button>
</form>        
   </div>
        );
    }
}


