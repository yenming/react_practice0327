var NameInput = React.createClass({
  markdownGithubParser: function(data) {
    var self = this;
    $.ajax({
      method: 'POST',
      url: 'https://api.github.com/markdown/raw',
      dataType: "html",
      processData: false,
      data: data,
      contentType: "text/plain",
      success: function(data) {
        $(self.props.target).html(data);
      },
      error: function(xhr, status, err) {
        console.log(err + ': ' + status);
      }
    });
  },
  markdownLocalParser: function(data) {
    var converter = new showdown.Converter();
    $(this.props.target).html(converter.makeHtml(data));
  },
  handleChange: function(event) {
    if (this.props.parser && this.props.parser === "local")
      this.markdownLocalParser(event.target.value);
    else
      this.markdownGithubParser(event.target.value);
  },
  render: function() {
    return (
      <textarea 
      rows={this.props.rows}
      className="form-control" 
      onChange={this.handleChange} />
    );
  }
});

ReactDOM.render(
  <NameInput rows="5" target="#article" parser="local" />,
  document.getElementById('container')
);