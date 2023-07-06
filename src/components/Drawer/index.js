import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';
import isEmpty from 'lodash/isEmpty';
import './drawer.scss';

const Drawer = (props) => {
  const { show, title, subtitle = '', backdrop = true, handleClickCross, moreOption = [], children } = props;

  console.log('moreOption', moreOption);
  return (
    <div className="drawer-wrapper">
      {backdrop && <div className="backdrop" onClick={handleClickCross}></div>}
      <div id="menu" className={`drawer p-0 ${!show ? 'drawerCollapse' : ''}`}>
        <div className="drawer-container p-4">
          <div className="drawer-header d-flex justify-content-between">
            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="sidebar-actions d-flex">
              {!isEmpty(moreOption) && (
                <Dropdown id="dropdown-item-button" className="action-dropdown deploy-more-option">
                  <Dropdown.Toggle variant="link" className="right">
                    <Icon>more_horiz</Icon>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {moreOption.map((item) => {
                      return (
                        <Dropdown.Item
                          key={item.label}
                          onClick={() => {
                            item.action();
                          }}
                        >
                          {item.label}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              )}

              <Button variant="link" onClick={handleClickCross}>
                <Icon>close</Icon>
              </Button>
            </div>
          </div>
          <div className="drawer-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
