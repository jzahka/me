(function() {
  "use strict"

  Me.Suggest = React.createClass({

    propTypes: {
      onSumbmit: React.PropTypes.func,
      placeholder: React.PropTypes.string
    },

    handleChange: function(event) {
      this.setState({value: event.target.value});
    },

    getInitialState: function() {
      return {
        value: '',
        justSuggested: false,
      };
    },

    componentWillReceiveProps: function(nextProps) {
      this.setState({justSuggested: false})
    },

    render: function() {
      var icon;
      if (this.state.justSuggested) {
        icon = (
          <ReactCSSTransitionGroup
            transitionName="voter-transition"
            transitionAppear={true}
          >
            <span className="glyphicon glyphicon-ok" />
          </ReactCSSTransitionGroup>
        )
      } else {
        icon = <span className="glyphicon glyphicon-pencil" />
      }
      return (
        <div id="suggest">
          <form onSubmit={this.onSumbmit}>
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  Suggest
                </button>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.handleChange}
                aria-describedby="basic-addon1"
              />
              <span className="input-group-addon">{icon}</span>
            </div>
          </form>
        </div>
      );
    },

    onSumbmit: function(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
      this.setState({value: '', justSuggested: true});
    }

  });

})();
