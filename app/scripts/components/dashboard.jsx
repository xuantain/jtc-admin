'use strict';

var React = require('react'),
    AdminHeader = require('./AdminHeader'),
    PanelOverView1 = require('./panelOverView1'),
    PanelOverView2 = require('./panelOverView2'),
    PanelOverView3 = require('./panelOverView3');

function renderFunc() {

  var panelStatus = [
    {
      className: 'panel-green',
      icon: 'fa-signal',
      content: [
        {
          title: 'Doanh thu',
          number: 0,
        }
      ]
    },
    {
      className: 'panel-primary',
      icon: 'fa-shopping-cart',
      content: [
        {
          title: 'Số đơn hàng',
          number: 0
        },
        {
          title: 'Số hàng hóa',
          number: 0
        }
      ]
    },
    {
      className: 'panel-red',
      icon: 'fa-undo',
      content: [
        {
          title: 'Hàng khách trả',
          number: 0
        }
      ]
    },
    {
      className: 'panel-yellow',
      icon: 'fa-cloud',
      content: [
        {
          title: 'Đơn hàng web',
          number: 0
        }
      ]
    }
  ];
  var Infos = [
    {
      className: 'panel-primary',
      title: 'Hoạt động',
      icon: 'fa-signal',
      content: [
        {
          title: 'Doanh thu',
          number: 0
        },
        {
          title: 'Lãi gộp',
          number: 0
        },
        {
          title: 'Số đơn hàng',
          number: 0
        },
        {
          title: 'Doanh thu/đơn hàng',
          number: 0
        },
        {
          title: 'Hàng khách trả lại',
          number: 0
        }
      ]
    },
    {
      className: 'panel-yellow',
      title: 'Thông tin kho',
      icon: 'fa-tags',
      content: [
        {
          title: 'Tồn kho lâu',
          number: 15
        },
        {
          title: 'Hết hàng',
          number: 4
        },
        {
          title: 'Sắp hết hàng',
          number: 0
        },
        {
          title: 'Vượt định mức',
          number: 0
        }
      ]
    },
    {
      className: 'panel-green',
      title: 'Thông tin hàng hóa',
      icon: 'fa-barcode',
      content: [
        {
          title: 'Hàng hóa/chủng loại',
          number: '10/21'
        },
        {
          title: 'Chưa làm giá bán',
          number: 0
        },
        {
          title: 'Chưa nhập giá mua',
          number: 0
        },
        {
          title: 'Hàng chưa phân loại',
          number: 0
        }
      ]
    }
  ];
  var Charts = [
    {
      className: 'panel-default',
      title: 'Biểu đồ doanh số tuần',
      icon: 'fa-signal',
      content: []
    },
    {
      className: 'panel-default',
      title: 'Thông tin từ web',
      icon: 'fa-cloud',
      content: [
        {
          title: '(Chưa đăng ký website)'
        },
        {
          title: 'Lượng truy cập',
          number: 0
        },
        {
          title: 'Số trang xem',
          number: 0
        },
        {
          title: 'Thời gian lưu lại web',
          number: 0
        },
        {
          title: 'Trang web nhiều nhất',
          number: 'N/A'
        }
      ]
    },
    {
      className: 'panel-default',
      title: 'Tin chuyên ngành',
      icon: 'fa-rss',
      content: []
    }
  ];
  var titleStyle = {
    borderBottom: '3px solid #337ab7',
    paddingBottom: '2px'
  };

  return (
    <div>
      <AdminHeader />
      <div id='page-wrapper'>
        <style>
          {`
            a:hover {
              text-decoration: none;
            }
            .row:even {
              backgroup-color: #f8f8f8;
            }
          `}
        </style>
        <div className='row'>
          <div className='col-xs-12'>
            <h4><a href='javascript:;' style={titleStyle}>
              <i className='fa fa-signal fa-1x'></i>&nbsp;&nbsp;Hoạt động hôm nay la</a></h4>
          </div>
          {
            panelStatus.map(function(panelData, index) {
              return <PanelOverView1 key={'statusOverview-'+ index} data={panelData} />
            })
          }
        </div>
        {/*<!-- /.row -->*/}
        <div className="row">
        {
          Infos.map(function(info, index) {
            return <PanelOverView2 key={'infoOverview-'+ index} data={info} />
          })
        }
        </div>
        {/*<!-- /.row -->*/}
        <div className="row">
        {
          Charts.map(function(chart, index) {
            return <PanelOverView3 key={'chartOverview-'+ index} data={chart} />
          })
        }
        </div>
      </div>
    </div>
    //<!-- /#page-wrapper -->
  );
}

var Dashboard = React.createClass({
  render: renderFunc
});

module.exports = Dashboard;
