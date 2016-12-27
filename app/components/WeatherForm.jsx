var React = require('react');

var WeatherForm = React.createClass({
   render: function () {
       return (
           <div>
               <form>
                   <div>
                       <input name="city" type="text" placeholder="Enter city name"/>
                   </div>
                   <div>
                       <button onSubmit="">Get Weather</button>
                   </div>
               </form>
           </div>
       )
   }
});

module.exports = WeatherForm;