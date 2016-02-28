/* global $ */
'use strict';

var React = require('react'),
    MenuItem = require('./AdminSidebarMenuItem');

var AdminSidebar = React.createClass({
  componentDidMount: function() {
    $('#side-menu').metisMenu();
  },
  render: function() {

    var menu = [
      {
        'url': 'javascript:;',
        'title': 'Tổng quan',
        'icon': 'fa fa-fw fa-dashboard'
      },
      {
        'url': 'javascript:;',
        'title': 'Đơn hàng',
        'icon': 'fa fa-fw fa-shopping-cart'
      },
      {
        'url': 'javascript:;',
        'title': 'Hàng hóa',
        'icon': 'fa fa-fw fa-barcode'
      },
      {
        'url': 'javascript:;',
        'title': 'Khách hàng',
        'icon': 'fa fa-fw fa-users'
      },
      {
        'url': 'javascript:;',
        'title': 'Nhập kho',
        'icon': 'fa fa-fw fa-truck'
      },
      {
        'url': 'javascript:;',
        'title': 'Tồn kho',
        'icon': 'fa fa-fw fa-list-alt'
      },
      {
        'url': 'javascript:;',
        'title': 'Doanh số',
        'icon': 'fa fa-fw fa-signal'
      },
      {
        'url': 'javascript:;',
        'title': 'Chi phí',
        'icon': 'fa fa-fw fa-file-text'
      },
      {
        'url': 'javascript:;',
        'title': 'Lợi nhuận',
        'icon': 'fa fa-fw fa-usd'
      },
      {
        'url': 'javascript:;',
        'title': 'Thiết lập',
        'icon': 'fa fa-fw fa-cogs'
      },
      {
        'url': 'javascript:;',
        'title': ' Charts',
        'icon': 'fa fa-bar-ch fa-fwart-o',
        'span': 'fa arrow',
        'submenu': {
          'className': 'nav nav-second-level',
          'itemList': [
            {
              'url': 'javascript:;',
              'title': 'FlotCharts'
            },
            {
              'url': 'javascript:;',
              'title': 'Morris.jsCharts'
            }
          ]
        }
      },
      {
        'url': 'javascript:;',
        'title': ' Tables',
        'icon': 'fa fa-fw fa-table'
      },
      {
        'url': 'javascript:;',
        'title': ' Forms',
        'icon': 'fa fa-fw fa-table'
      },
      {
        'url': 'javascript:;',
        'title': ' UI Elements',
        'icon': 'fa fa-fw fa-wrench',
        'span': 'fa arrow',
        'submenu': {
          'className': 'nav nav-second-level',
          'itemList': [
            {
              'url': 'javascript:;',
              'title': 'Panels and Wells'
            },
            {
              'url': 'javascript:;',
              'title': 'Buttons'
            },
            {
              'url': 'javascript:;',
              'title': 'Notifications'
            },
            {
              'url': 'javascript:;',
              'title': 'Typography'
            },
            {
              'url': 'javascript:;',
              'title': 'Icons'
            },
            {
              'url': 'javascript:;',
              'title': 'Grid'
            }
          ]
        }
      },
      {
        'url': 'javascript:;',
        'title': ' Multi-Level Dropdown',
        'icon': 'fa fa-fw fa-sitemap',
        'span': 'fa arrow',
        'submenu': {
          'className': 'nav nav-second-level',
          'itemList': [
            {
              'url': 'javascript:;',
              'title': 'Second Level Item'
            },
            {
              'url': 'javascript:;',
              'title': 'Second Level Item'
            },
            {
              'url': 'javascript:;',
              'title': 'Third Level',
              'span': 'fa arrow',
              'submenu': {
                'className': 'nav nav-third-level',
                'itemList': [
                  {
                    'url': 'javascript:;',
                    'title': 'Third Level Item'
                  },
                  {
                    'url': 'javascript:;',
                    'title': 'Third Level Item'
                  },
                  {
                    'url': 'javascript:;',
                    'title': 'Third Level Item'
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'url': 'javascript:;',
        'title': ' Sample Pages',
        'icon': 'fa fa-fi fa-fwles-o',
        'span': 'fa arrow',
        'submenu': {
          'className': 'nav nav-second-level',
          'itemList': [
            {
              'url': 'javascript:;',
              'title': 'Blank Page'
            },
            {
              'url': 'javascript:;',
              'title': 'Blank Page'
            }
          ]
        }
      }
    ];

    return (
      <div className='navbar-default sidebar' role='navigation'>
        <div className='sidebar-nav navbar-collapse'>
          <ul className='nav' id='side-menu'>
            <li className='sidebar-search'>
              <div className='input-group custom-search-form'>
                <input type='text' className='form-control' placeholder='Search...'/>
                &nbsp;&nbsp;
                <span className='input-group-btn'>
                  <button className='btn btn-default' type='button'>
                    <i className='fa fa-search'/>
                  </button>
                </span>
              </div>
              {/*<!-- /input-group -->*/}
            </li>

            {
              // this.props.menuList
              menu.map( function( item, index ) {
                return (
                  <MenuItem
                    key={'sidebarTab'+index}
                    className={item.className}
                    url={item.url}
                    icon={item.icon}
                    title={item.title}
                    span={item.span}
                    submenu={item.submenu}
                  />
                );
              })
            }

          </ul>
        </div>
        {/*<!-- /.sidebar-collapse -->*/}
      </div>
      // {/*<!-- /.navbar-static-side -->*/}
    );
  }
});

module.exports = AdminSidebar;
