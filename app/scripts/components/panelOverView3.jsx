'use strict';

var React = require('react');

function renderFunc() {
  return (
    <div className='col-xs-4'>
      <div className={'panel '+ this.props.data.className}>
        <div className='panel-heading'>
          <i className={'fa '+ this.props.data.icon +' fa-1x'}></i>&nbsp;&nbsp;
          {this.props.data.title}
        </div>
        <div className="panel-footer">
          <div className="clearfix"></div>
          {
            this.props.data.content.map(function(tip, index) {
              return (
                <div key={index}>
                  {tip.title}
                  <span className="pull-right">{tip.number}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

var PanelOverView3 = React.createClass({
  render: renderFunc
});

module.exports = PanelOverView3;
