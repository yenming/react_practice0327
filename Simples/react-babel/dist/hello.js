'use strict';

var NameInput = React.createClass({ displayName: "NameInput",
  markdownGithubParser: function markdownGithubParser(data) {
    var self = this;
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
    });
  },
  markdownLocalParser: function markdownLocalParser(data) {
    var converter = new showdown.Converter();
    $(this.props.target).html(converter.makeHtml(data));
  },
  handleChange: function handleChange(event) {
    if (this.props.parser && this.props.parser === "local") this.markdownLocalParser(event.target.value);else this.markdownGithubParser(event.target.value);
  },
  render: function render() {
    return React.createElement("textarea", {
      rows: this.props.rows,
      className: "form-control",
      onChange: this.handleChange });
  }
});

ReactDOM.render(React.createElement(NameInput, { rows: "5", target: "#article", parser: "local" }), document.getElementById('container'));
//# sourceMappingURL=hello.js.map
