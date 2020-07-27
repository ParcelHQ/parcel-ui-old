import React, { useContext } from 'react';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge,
  Button,
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import * as Icon from 'react-feather';
import { history } from '../../../history';
import { LayoutContext } from '../../../state/layout/Context';
import { CHANGE_MODE } from '../../../state/layout/Constants';

export default function NavbarUser({ userImg, userName }: any) {
  const { layout, dispatch } = useContext(LayoutContext);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      {/* <Button
        outline
        color="flat-primary"
        onClick={() => dispatch({ type: CHANGE_MODE, mode: 'light' })}
      >
        {layout.theme === 'dark' ? (
          <Icon.Sun size={21} />
        ) : (
          <Icon.Moon size={21} />
        )}
      </Button> */}
      <UncontrolledDropdown tag="li" className="dropdown-notification nav-item">
        <DropdownToggle tag="a" className="nav-link nav-link-label">
          <Icon.Bell size={21} />
          <Badge pill color="primary" className="badge-up">
            {' '}
            5{' '}
          </Badge>
        </DropdownToggle>
        <DropdownMenu tag="ul" right className="dropdown-menu-media">
          <li className="dropdown-menu-header">
            <div className="dropdown-header mt-0">
              <h3 className="text-white">5 New</h3>
              <span className="notification-title">App Notifications</span>
            </div>
          </li>
          <PerfectScrollbar
            className="media-list overflow-hidden position-relative"
            options={{
              wheelPropagation: false,
            }}
          >
            <div className="d-flex justify-content-between">
              <Media className="d-flex align-items-start">
                <Media left href="#">
                  <Icon.PlusSquare
                    className="font-medium-5 primary"
                    size={21}
                  />
                </Media>
                <Media body>
                  <Media heading className="primary media-heading" tag="h6">
                    You have new order!
                  </Media>
                  <p className="notification-text">
                    Are your going to meet me tonight?
                  </p>
                </Media>
                <small>
                  <time
                    className="media-meta"
                    dateTime="2015-06-11T18:29:20+08:00"
                  >
                    9 hours ago
                  </time>
                </small>
              </Media>
            </div>
            <div className="d-flex justify-content-between">
              <Media className="d-flex align-items-start">
                <Media left href="#">
                  <Icon.DownloadCloud
                    className="font-medium-5 success"
                    size={21}
                  />
                </Media>
                <Media body>
                  <Media heading className="success media-heading" tag="h6">
                    99% Server load
                  </Media>
                  <p className="notification-text">
                    You got new order of goods?
                  </p>
                </Media>
                <small>
                  <time
                    className="media-meta"
                    dateTime="2015-06-11T18:29:20+08:00"
                  >
                    5 hours ago
                  </time>
                </small>
              </Media>
            </div>
            <div className="d-flex justify-content-between">
              <Media className="d-flex align-items-start">
                <Media left href="#">
                  <Icon.AlertTriangle
                    className="font-medium-5 danger"
                    size={21}
                  />
                </Media>
                <Media body>
                  <Media heading className="danger media-heading" tag="h6">
                    Warning Notification
                  </Media>
                  <p className="notification-text">
                    Server has used 99% of CPU
                  </p>
                </Media>
                <small>
                  <time
                    className="media-meta"
                    dateTime="2015-06-11T18:29:20+08:00"
                  >
                    Today
                  </time>
                </small>
              </Media>
            </div>
            <div className="d-flex justify-content-between">
              <Media className="d-flex align-items-start">
                <Media left href="#">
                  <Icon.CheckCircle className="font-medium-5 info" size={21} />
                </Media>
                <Media body>
                  <Media heading className="info media-heading" tag="h6">
                    Complete the task
                  </Media>
                  <p className="notification-text">
                    One of your task is pending.
                  </p>
                </Media>
                <small>
                  <time
                    className="media-meta"
                    dateTime="2015-06-11T18:29:20+08:00"
                  >
                    Last week
                  </time>
                </small>
              </Media>
            </div>
            <div className="d-flex justify-content-between">
              <Media className="d-flex align-items-start">
                <Media left href="#">
                  <Icon.File className="font-medium-5 warning" size={21} />
                </Media>
                <Media body>
                  <Media heading className="warning media-heading" tag="h6">
                    Generate monthly report
                  </Media>
                  <p className="notification-text">
                    Reminder to generate monthly report
                  </p>
                </Media>
                <small>
                  <time
                    className="media-meta"
                    dateTime="2015-06-11T18:29:20+08:00"
                  >
                    Last month
                  </time>
                </small>
              </Media>
            </div>
          </PerfectScrollbar>
          <li className="dropdown-menu-footer">
            <DropdownItem tag="a" className="p-1 text-center">
              <span className="align-middle">Read all notifications</span>
            </DropdownItem>
          </li>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600">{userName}</span>
            <span className="user-status">Available</span>
          </div>
          <span data-tour="user">
            <img
              src={userImg}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag="a" href="#">
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <Icon.Mail size={14} className="mr-50" />
            <span className="align-middle">My Inbox</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <Icon.CheckSquare size={14} className="mr-50" />
            <span className="align-middle">Tasks</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <Icon.MessageSquare size={14} className="mr-50" />
            <span className="align-middle">Chats</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <Icon.Heart size={14} className="mr-50" />
            <span className="align-middle">WishList</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => history.push('/pages/login')}
          >
            <Icon.Power size={14} className="mr-50" />
            <span className="align-middle">Log Out</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
}
