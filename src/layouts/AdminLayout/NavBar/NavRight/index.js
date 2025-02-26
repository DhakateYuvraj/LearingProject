import React, { useContext, useState } from 'react';
import { ListGroup, Dropdown, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChatList from './ChatList';
import { ConfigContext } from '../../../../contexts/ConfigContext';
import useAuth from '../../../../hooks/useAuth';

import avatar1 from '../../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../../assets/images/user/avatar-4.jpg';

const toggleFullScreen = () => {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

const NavRight = () => {
  const configContext = useContext(ConfigContext);
  const { logout } = useAuth();
  const { rtlLayout } = configContext.state;

  const [listOpen, setListOpen] = useState(false);
  const [fullCard, setFullCard] = useState(false);

  const handleLogout = async () => {
    try {
      //handleClose();
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">
        <span
          className="mr-4 btn"
          onClick={() => {
            toggleFullScreen();
            setFullCard(!fullCard);
          }}
        >
          <i className={fullCard ? 'feather icon-minimize' : 'feather icon-maximize'} />
        </span>
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown alignRight={!rtlLayout}>
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <i className="feather icon-bell icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="notification notification-scroll">
              <div className="noti-head">
                <h6 className="d-inline-block m-b-0">Notifications</h6>
                <div className="float-right">
                  <Link to="#" className="m-r-10">
                    mark as read
                  </Link>
                  <Link to="#">clear all</Link>
                </div>
              </div>
              <PerfectScrollbar>
                <ListGroup as="ul" bsPrefix=" " variant="flush" className="noti-body">
                  <ListGroup.Item as="li" bsPrefix=" " className="n-title">
                    <p className="m-b-0">NEW</p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    <Media>
                      <img className="img-radius" src={avatar1} alt="Generic placeholder" />
                      <Media.Body>
                        <p>
                          <strong>Yuvi Dhakate</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>New ticket Added</p>
                      </Media.Body>
                    </Media>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="n-title">
                    <p className="m-b-0">EARLIER</p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    <Media>
                      <img className="img-radius" src={avatar2} alt="Generic placeholder" />
                      <Media.Body>
                        <p>
                          <strong>Joseph William</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>Purchase New Theme and make payment</p>
                      </Media.Body>
                    </Media>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    <Media>
                      <img className="img-radius" src={avatar3} alt="Generic placeholder" />
                      <Media.Body>
                        <p>
                          <strong>Sara Soudein</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>currently login</p>
                      </Media.Body>
                    </Media>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    <Media>
                      <img className="img-radius" src={avatar4} alt="Generic placeholder" />
                      <Media.Body>
                        <p>
                          <strong>Suzen</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            yesterday
                          </span>
                        </p>
                        <p>Purchase New Theme and make payment</p>
                      </Media.Body>
                    </Media>
                  </ListGroup.Item>
                </ListGroup>
              </PerfectScrollbar>
              <div className="noti-footer">
                <Link to="#">show all</Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        {/*
<ListGroup.Item as="li" bsPrefix=" ">
<Dropdown>
<Dropdown.Toggle as={Link} variant="link" to="#" className="displayChatbox" onClick={() => setListOpen(true)}>
<i className="icon feather icon-mail" />
</Dropdown.Toggle>
</Dropdown>
</ListGroup.Item>
*/}
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown alignRight={!rtlLayout} className="drp-user">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <i className="icon feather icon-settings" />
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="profile-notification">
              <div className="pro-head">
                <img src={avatar1} className="img-radius" alt="User Profile" />
                <span>Yuvi Dhakate</span>
                <Link to="#" className="dud-logout" title="Logout">
                  <i className="feather icon-log-out" />
                </Link>
              </div>
              <ListGroup as="ul" bsPrefix=" " variant="flush" className="pro-body">
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item">
                    <i className="feather icon-user" /> Profile
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item" onClick={handleLogout}>
                    <i className="feather icon-log-out" /> Logout
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </>
  );
};

export default NavRight;
