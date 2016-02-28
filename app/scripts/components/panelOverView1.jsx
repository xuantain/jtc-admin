'use strict';

var React = require('react');

function renderFnc() {
  return (
    <div className='col-xs-3'>
      <div className={'panel '+ this.props.data.className}>
        <div className='panel-heading'>
          <div className='row'>
            <div className='col-xs-3'>
              <i className={'fa '+ this.props.data.icon +' fa-2x'}></i>&nbsp;&nbsp;
            </div>
            <div className='col-xs-9'>

            </div>
          </div>
        </div>
        {
          this.props.data.url ?
            '<a href="{this.props.data.url}">' +
              '<div className="panel-footer">' +
                '<span className="pull-left">View Details</span>' +
                '<span className="pull-right"><i className="fa fa-arrow-circle-right"/></span>' +
                '<div className="clearfix"></div>' +
              '</div>' +
            '</a>' : ''
        }
      </div>
    </div>
  );
}

var PanelOverView1 = React.createClass({
  render: renderFnc
});

module.exports = PanelOverView1;
