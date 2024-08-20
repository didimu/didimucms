//참고로 서브메뉴 URL에는 앞선 /를 무시해도 됩니다. 이 경우에는 추가하든 안 하든 상관없습니다. 
//그러나 동적 중첩 라우트를 구현하려면 포함하지 않아야 합니다.

//현재 Navbar가 코드에서 메뉴 항목을 렌더링하고 있습니다. 
//디자인을 다시 살펴보면 Navbar의 직계 자식인 MenuItems 컴포넌트가 이러한 항목을 렌더링하는 역할을 담당합니다.



export const menuItemsData = [ 
    {
      title: '테니스',
      url: '/intro',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        },
        {
          title: 'Web Development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: '선수소개',
      url: '/port',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        },
        {
          title: 'Web Development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: '유튜브',
      url: '/youtube',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        },
        {
          title: 'Web Development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: '이미지',
      url: '/movie',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        }, 
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: '영화',
      url: '/unsplash',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        },
        {
          title: 'Web Development',
          url: 'web-dev',
        }, 
      ],
    },
  ];