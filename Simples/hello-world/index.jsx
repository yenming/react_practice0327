    var Hello = React.createClass({
      render: function() {
        return (

        <div>Hello {this.props.name}<List/>

        </div>
        

        );
      }
    });
    
  
    var List = React.createClass({
      render : function(){
        return (
        <ul>
          <li>Item 1</li>
        </ul>
        );

      }

    });


    ReactDOM.render(
    <Hello name="World"></Hello>,
      document.getElementById('container')
    );