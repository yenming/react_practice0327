  var NameInput = React.createClass({
      loadHtml: function(data){
        $.ajax({
          method:'POST',
          url:'http://api.github.com/markdown/raw',
          dataType:"html",
          processData:false,
          data:data,
          contentType:"text/plain",
          sucess: function(data){
            $('#article').html(data);

          },
          error(function(xhr,status,err) {
            /* Act on the event */
            console.log(err+';'+status);
            }
          });
        },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }