const menuItems = {
  items: [
    {
      id: 'analysis',
      title: 'Analysis',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'feather icon-home'
        }
      ]
    },
    {
      id: 'attendance',
      title: 'Attendance',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'studentAttendance',
          title: 'Student Attendance',
          type: 'item',
          url: '/attendance-student',
          icon: 'feather icon-home'
        },
        {
          id: 'staffAttendance',
          title: 'Staff Attendance',
          type: 'item',
          url: '/attendance-staff',
          icon: 'feather icon-home'
        },
        {
          id: 'leaves',
          title: 'Leaves',
          type: 'item',
          url: '/leaves',
          icon: 'feather icon-home'
        }
      ]
    },
    {
      id: 'schedule',
      title: 'Schedule',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'timetable',
          title: 'Timetable',
          type: 'item',
          url: '/timetable',
          icon: 'feather icon-home'
        },
        {
          id: 'yearCalendar',
          title: 'Year Calendar',
          type: 'item',
          url: '/yearCalendar',
          icon: 'feather icon-home'
        }
      ]
    },
    {
      id: 'config',
      title: 'Config',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'staff',
          title: 'Staff',
          type: 'item',
          url: '/users',
          icon: 'feather icon-home'
        },
        {
          id: 'students',
          title: 'Students',
          type: 'item',
          url: '/students',
          icon: 'feather icon-home'
        },
        {
          id: 'addStudent',
          title: 'Add Student',
          type: 'item',
          url: '/students/add',
          icon: 'feather icon-home',
          isVisible: false
        },
        {
          id: 'classRoom',
          title: 'Class Rooms',
          type: 'item',
          url: '/classRooms',
          icon: 'feather icon-home'
        }
      ]
    }
    /*{
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'feather icon-home'
        }
      ]
    },
    {
      id: 'ui-element',
      title: 'UI ELEMENT',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Component',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Button',
              type: 'item',
              url: '/basic/button'
            },
            {
              id: 'badges',
              title: 'Badges',
              type: 'item',
              url: '/basic/badges'
            },
            {
              id: 'breadcrumb',
              title: 'Breadcrumb',
              type: 'item',
              url: '/basic/breadcrumb'
            },
            {
              id: 'pagination',
              title: 'Pagination',
              type: 'item',
              url: '/basic/pagination'
            },
            {
              id: 'collapse',
              title: 'Collapse',
              type: 'item',
              url: '/basic/collapse'
            },
            {
              id: 'tabs-pills',
              title: 'Tabs & Pills',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            {
              id: 'typography',
              title: 'Typography',
              type: 'item',
              url: '/basic/typography'
            }
          ]
        }
      ]
    },
    {
      id: 'forms-tables',
      title: 'Forms & Tables',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Form Elements',
          type: 'item',
          url: '/forms/form-basic',
          icon: 'feather icon-file-text'
        },
        {
          id: 'tables',
          title: 'Table',
          type: 'item',
          url: '/tables/bootstrap',
          icon: 'feather icon-server'
        }
      ]
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'charts',
          title: 'Charts',
          type: 'item',
          url: '/charts/nvd3',
          icon: 'feather icon-pie-chart'
        },
        {
          id: 'maps',
          title: 'Map',
          type: 'item',
          url: '/maps/google-map',
          icon: 'feather icon-map'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          badge: {
            title: 'New',
            type: 'label-danger'
          },
          children: [
            {
              id: 'signup',
              title: 'Sign up',
              type: 'item',
              url: '/signup',
              target: true,
              breadcrumbs: false
            },

            {
              id: 'signin',
              title: 'Sign in',
              type: 'item',
              url: '/signin',
              target: true,
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          icon: 'feather icon-help-circle',
          classes: 'nav-item',
          url: 'https://codedthemes.com/item/datta-able-react-free-admin-template/#',
          target: true,
          external: true
        },
        {
          id: 'menu-level',
          title: 'Menu Levels',
          type: 'collapse',
          icon: 'feather icon-menu',
          children: [
            {
              id: 'menu-level-1.1',
              title: 'Menu Level 1.1',
              type: 'item',
              url: '#!'
            },
            {
              id: 'menu-level-1.2',
              title: 'Menu Level 2.2',
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-2.1',
                  title: 'Menu Level 2.1',
                  type: 'item',
                  url: '#'
                },
                {
                  id: 'menu-level-2.2',
                  title: 'Menu Level 2.2',
                  type: 'collapse',
                  children: [
                    {
                      id: 'menu-level-3.1',
                      title: 'Menu Level 3.1',
                      type: 'item',
                      url: '#'
                    },
                    {
                      id: 'menu-level-3.2',
                      title: 'Menu Level 3.2',
                      type: 'item',
                      url: '#'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'disabled-menu',
          title: 'Disabled Menu',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'feather icon-power'
        }
      ]
    }*/
  ]
};

export default menuItems;
