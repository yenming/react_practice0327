'use strict';
const slideShowBtn = React.createClass({
  render:function(event){
    return (
      event.preventDafult();
      console.log('submit')
    },
    render ：function(){
      return(
        <input
        onClick={this.handleSubmit}
        type="submit"
        className = "btn btn-default"
        value={this.prop.value}/>

        );


    }


})


const NameInput = React.createClass({ displayName: "NameInput",
  markdownGithubParser: function markdownGithubParser(data) {
    let self = this;
    $.ajax({
      method: 'POST',
      url: 'https://api.github.com/markdown/raw',
      dataType: "html",
      processData: false,
      data: data,
      contentType: "text/plain",
      success: function success(data) {
        $(self.props.target).html(data);
      },
      error: function error(xhr, status, err) {
        console.log(err + ': ' + status);
      }
    })
  },

  markdownLocalParser: function markdownLocalParser(data) {
    var converter = new showdown.Converter();
    $(this.props.target).html(converter.makeHtml(this.state.data));
  },
  handleChange: function handleChange(event) {
     var data = event.target.value;

    if (this.props.parser && this.props.parser === "local")
     this.markdownLocalParser(event.target.value);
   else 
    this.markdownGithubParser(event.target.value);
  },
  getInitialState : function(){
    return{
      data : ''

    };
  },
  componentDidMount: function() {

  },
  render: function render() {
    return React.createElement("textarea", {
      rows: this.props.rows,
      className: "form-control",
      onChange: this.handleChange });
  }
});
// 畫面
ReactDOM.render(
React.createElement(NameInput, 
{ rows: "5", target: "#article", parser: "local" }), 
document.getElementById('container'));
//# sourceMappingURL=hello.js.map
