import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import navigation from '../../../menu-items';
import { BASE_TITLE, BASENAME } from '../../../config/constant';

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

const Breadcrumb = () => {
  const [main, setMain] = useState([]);
  const [item, setItem] = useState([]);
  const [fullCard, setFullCard] = useState(false);

  useEffect(() => {
    navigation.items.map((item, index) => {
      if (item.type && item.type === 'group') {
        getCollapse(item, index);
      }
      return false;
    });
  });

  const getCollapse = (item, index) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse, index);
        } else if (collapse.type && collapse.type === 'item') {
          if (document.location.pathname === BASENAME + collapse.url) {
            setMain(item);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  let mainContent, itemContent;
  let breadcrumbContent = '';
  let title = '';

  if (main && main.type === 'collapse') {
    console.log('asdasdasdasdasdasdasd');
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{main.title}</Link>
      </ListGroup.Item>
    );
  }

  if (item && item.type === 'item') {
    console.log('itemitemitemitemitemitem');
    title = item.title;
    itemContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{title}</Link>
      </ListGroup.Item>
    );

    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header mx-4">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
                  <span
                    className="pr-2 mr-4 btn"
                    onClick={() => {
                      toggleFullScreen();
                      setFullCard(!fullCard);
                    }}
                  >
                    <i className={fullCard ? 'feather icon-minimize' : 'feather icon-maximize'} />
                  </span>
                  <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                    <Link to="/">
                      <i className="feather icon-home" />
                    </Link>
                  </ListGroup.Item>
                  {mainContent}
                  {itemContent}
                </ListGroup>
                <div className="page-header-title">
                  <h5 className="m-b-10">{title}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    document.title = title + BASE_TITLE;
  }
  console.log('breadcrumbContent', breadcrumbContent);

  return <> {breadcrumbContent}</>;
};

export default Breadcrumb;
