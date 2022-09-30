import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fireEvent, screen} from '@testing-library/react'
import { Search} from 'react-bootstrap-icons';
import { SfButton } from '.'
import { SfInput } from '.'
import { SfNav } from '.'

import '@testing-library/jest-dom/extend-expect';

const TEST_TIMEOUT = 30000;
const TIMEOUT = 2000;


let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('SfNav: Render Profile Portrait', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 390, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav showProfile={true} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, [{name: "name1", link: "link1"}, {name: "name2", link: "link2"}]]} profilePreamble={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>} profileComponent={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>} profilePicture='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png'/>, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_profile_menu');

  let menu = container.getElementsByClassName('nav_profile_toggle')[0];

  // open menu

  act(() => {
    fireEvent(
      menu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  let menuOverlay = container.getElementsByClassName('nav_div_profile_menu_overlay')[0];

  // close menu

  act(() => {
    fireEvent(
      menuOverlay,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).not.toContain('nav_div_profile_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      menu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  let navProfileMenu0 = container.getElementsByClassName('nav_profile_menu_0')[0];

  // click on nav

  act(() => {
    fireEvent(
      navProfileMenu0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_div_profile_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      menu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  let navProfileMenu1 = container.getElementsByClassName('nav_profile_menu_1_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navProfileMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  // click on sub nav

  let navProfileMenu1_0 = container.getElementsByClassName('nav_profile_menu_1_0')[0];

  act(() => {
    fireEvent(
      navProfileMenu1_0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_div_profile_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      menu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  navProfileMenu1 = container.getElementsByClassName('nav_profile_menu_1_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navProfileMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_profile_menu_overlay');

  let navProfileMenu3 = container.getElementsByClassName('nav_profile_menu_3_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navProfileMenu3,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_profile_menu_3_expanded');

  navProfileMenu3 = container.getElementsByClassName('nav_profile_menu_3_expanded')[0];

  // click on nav

  act(() => {
    fireEvent(
      navProfileMenu3,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_profile_menu_3_expanded');

})

it('SfNav: Render Profile Landscape', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 1290, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav showProfile={true} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePreamble={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>} profileComponent={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>} profilePicture='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png'/>, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_profile_menu');

  // let rightMenu = container.getElementsByClassName('nav_right_menu')[0];

  // // open menu

  // act(() => {
  //   fireEvent(
  //     rightMenu,
  //     new MouseEvent('click', {
  //       bubbles: true,
  //       cancelable: true,
  //     }),
  //   )
  // });

  // await new Promise((r) => setTimeout(r, TIMEOUT));

  // expect(container.innerHTML).toContain('nav_div_right_menu');


})


it('SfNav: Landscape Menus', async () => {

  const onMenuClickedMock = jest.fn();
  const onSearchPressedMock = jest.fn();
  const onSignInPressedMock = jest.fn();
  const onHomePressedMock = jest.fn();

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 1280, innerHeight: 800 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" onMenuClicked={(link) => {onMenuClickedMock()}} onSearchPressed={() => {onSearchPressedMock()}} onSignInPressed={() => {onSignInPressedMock()}} onHomePressed={() => {onHomePressedMock()}}/>, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

  let navMenu1 = container.getElementsByClassName('nav_menu_1')[0];

  // open menu

  act(() => {
    fireEvent(
      navMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_menu_overlay');

  // close menu

  act(() => {
    fireEvent(
      navMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      navMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_menu_overlay');

  let navMenuOverlay = container.getElementsByClassName('nav_menu_overlay')[0];

  // close menu

  act(() => {
    fireEvent(
      navMenuOverlay,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      navMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_menu_overlay');

  let navMenu1_0 = container.getElementsByClassName('nav_menu_1_0')[0];

  act(() => {
    fireEvent(
      navMenu1_0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_menu_overlay');

  // open menu

  act(() => {
    fireEvent(
      navMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_menu_overlay');

  let navMenu0 = container.getElementsByClassName('nav_menu_0')[0];

  act(() => {
    fireEvent(
      navMenu0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onMenuClickedMock).toHaveBeenCalled();

  // Search

  let searchInput = container.getElementsByClassName('sf_input_name')[0];

  act(() => {
    fireEvent.change(searchInput, { target: { value: 'hello' } })
    fireEvent.keyUp(searchInput, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(searchInput, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onSearchPressedMock).toHaveBeenCalled();

  // Sign In

  let signInButton = container.getElementsByClassName('nav_signin_button')[0];

  act(() => {
    fireEvent(
      signInButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onSignInPressedMock).toHaveBeenCalled();

  // home click

  let navBrand = container.getElementsByClassName('nav_brand')[0];

  act(() => {
    fireEvent(
      navBrand,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onHomePressedMock).toHaveBeenCalled();

  // home click

  let navBrandLogo = container.getElementsByClassName('nav_brand_logo')[0];

  act(() => {
    fireEvent(
      navBrandLogo,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onHomePressedMock).toHaveBeenCalled();

})

it('SfNav: Basic Render Landscape', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 1280, innerHeight: 800 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

})



it('SfNav: Basic Render Potrait', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 390, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

  let rightMenu = container.getElementsByClassName('nav_right_menu')[0];

  // open menu

  act(() => {
    fireEvent(
      rightMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_right_menu');


})


it('SfNav: Search / Sign In Portrait', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 390, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  const onSearchPressedMock = jest.fn();
  const onSignInPressedMock = jest.fn();
  const onHomePressedMock = jest.fn();

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" onSearchPressed={(value) => {onSearchPressedMock()}} onSignInPressed={() => {onSignInPressedMock()}} onHomePressed={() => {onHomePressedMock()}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

  let rightMenu = container.getElementsByClassName('nav_right_menu')[0];

  // open menu

  act(() => {
    fireEvent(
      rightMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_right_menu');

  let searchInput = container.getElementsByClassName('sf_input_name')[0];

  act(() => {
    fireEvent.change(searchInput, { target: { value: 'hello' } })
    fireEvent.keyUp(searchInput, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(searchInput, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onSearchPressedMock).toHaveBeenCalled();

  // open menu

  act(() => {
    fireEvent(
      rightMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });


  let signInButton = container.getElementsByClassName('btn_signin_portrait')[0];

  act(() => {
    fireEvent(
      signInButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onSignInPressedMock).toHaveBeenCalled();

  // home click

  let navBrand = container.getElementsByClassName('nav_brand')[0];

  act(() => {
    fireEvent(
      navBrand,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onHomePressedMock).toHaveBeenCalled();

  // home click

  let navBrandLogo = container.getElementsByClassName('nav_brand_logo')[0];

  act(() => {
    fireEvent(
      navBrandLogo,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(onHomePressedMock).toHaveBeenCalled();


});

it('SfNav: Right Menu Click Portrait', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 390, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

  let rightMenu = container.getElementsByClassName('nav_right_menu')[0];

  // open menu

  act(() => {
    fireEvent(
      rightMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_right_menu');

  let rightMenuOverlay = container.getElementsByClassName('nav_div_right_menu_overlay')[0];

  // close menu

  act(() => {
    fireEvent(
      rightMenuOverlay,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).not.toContain('nav_div_right_menu');


});


it('SfNav: Left Menu Click Portrait', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  window = Object.assign(window, { innerWidth: 390, innerHeight: 844 });
  await new Promise((r) => setTimeout(r, TIMEOUT));

  act(() => {
    render(<SfNav brand="Brand" brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]}  showSearch={true} showSignIn={true}  searchIcon={<Search />} searchCaption="Search" />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_brand');

  let leftMenu = container.getElementsByClassName('nav_left_menu')[0];

  // open menu

  act(() => {
    fireEvent(
      leftMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).toContain('nav_div_left_menu');

  let leftMenuOverlay = container.getElementsByClassName('nav_div_left_menu_overlay')[0];

  // close menu

  act(() => {
    fireEvent(
      leftMenuOverlay,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  expect(container.innerHTML).not.toContain('nav_div_left_menu');

  // open menu

  act(() => {
    fireEvent(
      leftMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_left_menu');

  let navLeftMenu0 = container.getElementsByClassName('nav_left_menu_0')[0];

  // click on nav

  act(() => {
    fireEvent(
      navLeftMenu0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_div_left_menu');

  // open menu

  act(() => {
    fireEvent(
      leftMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_left_menu');

  let navLeftMenu1 = container.getElementsByClassName('nav_left_menu_1_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navLeftMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_left_menu_1_0');

  let navLeftMenu1_0 = container.getElementsByClassName('nav_left_menu_1_0')[0];

  // click on leaf

  act(() => {
    fireEvent(
      navLeftMenu1_0,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_div_left_menu');

  // open menu

  act(() => {
    fireEvent(
      leftMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_div_left_menu');

  navLeftMenu1 = container.getElementsByClassName('nav_left_menu_1_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navLeftMenu1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_left_menu_1_0');

  let navLeftMenu3 = container.getElementsByClassName('nav_left_menu_3_collapsed')[0];

  // click on nav

  act(() => {
    fireEvent(
      navLeftMenu3,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('nav_left_menu_3_0');

  navLeftMenu3 = container.getElementsByClassName('nav_left_menu_3_expanded')[0];

  // click on nav

  act(() => {
    fireEvent(
      navLeftMenu3,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('nav_left_menu_3_0');


})



it('SfInput: Basic Render Primary Date', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  act(() => {
    render(<SfInput mode="night" inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

})

it('SfInput: Basic Render Primary Date > Prefill', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 10, mm: 12, yyyy: 1985}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  let sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];
  expect(sfInputDobDD.value).toContain('10');

})

it('SfInput: Basic Render Primary Date > Prefill invalid date in feb', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 30, mm: 2, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  let sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];
  expect(sfInputDobDD.value).toContain('30');

})

it('SfInput: Basic Render Primary Date > Prefill invalid date in apr', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 31, mm: 4, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  let sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];
  expect(sfInputDobDD.value).toContain('31');

})

it('SfInput: Basic Render Primary Date > Prefill invalid date in apr', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 28, mm: 4, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  let sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];
  expect(sfInputDobDD.value).toContain('28');

})

it('SfInput: Basic Render Primary Date > Entry', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="date" variant={'primary'} caption={'Date'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date');

  let sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];

  act(() => {
    fireEvent(
      sfInputDobDD,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date_picker');

  let year2020 = container.getElementsByClassName('year_2020')[0];

  act(() => {
    fireEvent(
      year2020,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  let month1 = container.getElementsByClassName('month_1')[0];

  act(() => {
    fireEvent(
      month1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  let date1 = container.getElementsByClassName('date_1')[0];

  act(() => {
    fireEvent(
      date1,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));

  sfInputDobDD = container.getElementsByClassName('sf_input_date_dd')[0];
  expect(sfInputDobDD.value).toContain('1');

  let btnClose = container.getElementsByClassName('sf_btn_date_close')[1];
  act(() => {
    fireEvent(
      btnClose,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('sf_input_date_picker');

  let sfInputDobMM = container.getElementsByClassName('sf_input_date_mm')[0];

  act(() => {
    fireEvent(
      sfInputDobMM,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date_picker');

  btnClose = container.getElementsByClassName('sf_btn_date_close')[1];
  act(() => {
    fireEvent(
      btnClose,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('sf_input_date_picker');

  let sfInputDobYYYY = container.getElementsByClassName('sf_input_date_yyyy')[0];

  act(() => {
    fireEvent(
      sfInputDobYYYY,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_date_picker');

  btnClose = container.getElementsByClassName('sf_btn_date_close')[1];
  act(() => {
    fireEvent(
      btnClose,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).not.toContain('sf_input_date_picker');

})


it('SfInput: Basic Render Primary DateOfBirth', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

})

it('SfInput: Basic Render Primary DateOfBirth > Prefill', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 10, mm: 12, yyyy: 1985}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  expect(sfInputDobDD.value).toContain('10');

})


it('SfInput: Basic Render Primary DateOfBirth > Prefill invalid date in feb', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 30, mm: 2, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  expect(sfInputDobDD.value).toContain('30');

})

it('SfInput: Basic Render Primary DateOfBirth > Prefill invalid date in apr', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 31, mm: 4, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  expect(sfInputDobDD.value).toContain('31');

})

it('SfInput: Basic Render Primary DateOfBirth > Prefill invalid date in apr', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} value={{dd: 28, mm: 4, yyyy: 2000}} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  expect(sfInputDobDD.value).toContain('28');

})


it('SfInput: Basic Render Primary DateOfBirth > Entry', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let divInput = container.getElementsByClassName('sf_input')[0];
  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  let sfInputDobMM = container.getElementsByClassName('sf_input_dateOfBirth_mm')[0];
  let sfInputDobYYYY = container.getElementsByClassName('sf_input_dateOfBirth_yyyy')[0];

  act(() => {
    fireEvent.change(sfInputDobDD, { target: { value: '10' } })
    fireEvent.keyUp(sfInputDobDD, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobDD, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobMM, { target: { value: '10' } })
    fireEvent.keyUp(sfInputDobMM, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobMM, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobYYYY, { target: { value: '1985' } })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).not.toBe('#dc3545');

})

it('SfInput: Basic Render Primary DateOfBirth > Entry > Invalid M = 2 D > 29', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let divInput = container.getElementsByClassName('sf_input')[0];
  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  let sfInputDobMM = container.getElementsByClassName('sf_input_dateOfBirth_mm')[0];
  let sfInputDobYYYY = container.getElementsByClassName('sf_input_dateOfBirth_yyyy')[0];

  act(() => {
    fireEvent.change(sfInputDobDD, { target: { value: '31' } })
    fireEvent.keyUp(sfInputDobDD, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobDD, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobMM, { target: { value: '2' } })
    fireEvent.keyUp(sfInputDobMM, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobMM, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobYYYY, { target: { value: '2000' } })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

})

it('SfInput: Basic Render Primary DateOfBirth > Entry > Invalid M = 2 D > 29', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let divInput = container.getElementsByClassName('sf_input')[0];
  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  let sfInputDobMM = container.getElementsByClassName('sf_input_dateOfBirth_mm')[0];
  let sfInputDobYYYY = container.getElementsByClassName('sf_input_dateOfBirth_yyyy')[0];

  act(() => {
    fireEvent.change(sfInputDobDD, { target: { value: '25' } })
    fireEvent.keyUp(sfInputDobDD, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobDD, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobMM, { target: { value: '2' } })
    fireEvent.keyUp(sfInputDobMM, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobMM, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobYYYY, { target: { value: '2000' } })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).not.toBe('#dc3545');

})

it('SfInput: Basic Render Primary DateOfBirth > Entry > Invalid M = 4 D > 30', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let divInput = container.getElementsByClassName('sf_input')[0];
  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  let sfInputDobMM = container.getElementsByClassName('sf_input_dateOfBirth_mm')[0];
  let sfInputDobYYYY = container.getElementsByClassName('sf_input_dateOfBirth_yyyy')[0];

  act(() => {
    fireEvent.change(sfInputDobDD, { target: { value: '31' } })
    fireEvent.keyUp(sfInputDobDD, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobDD, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobMM, { target: { value: '4' } })
    fireEvent.keyUp(sfInputDobMM, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobMM, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobYYYY, { target: { value: '2000' } })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

})

it('SfInput: Basic Render Primary DateOfBirth > Entry > Invalid M = 4 D < 30', async () => {

  jest.setTimeout(TEST_TIMEOUT);

  act(() => {
    render(<SfInput inputType="dateOfBirth" variant={'primary'} caption={'Date Of Birth'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(container.innerHTML).toContain('sf_input_dateOfBirth');

  let divInput = container.getElementsByClassName('sf_input')[0];
  let sfInputDobDD = container.getElementsByClassName('sf_input_dateOfBirth_dd')[0];
  let sfInputDobMM = container.getElementsByClassName('sf_input_dateOfBirth_mm')[0];
  let sfInputDobYYYY = container.getElementsByClassName('sf_input_dateOfBirth_yyyy')[0];

  act(() => {
    fireEvent.change(sfInputDobDD, { target: { value: '25' } })
    fireEvent.keyUp(sfInputDobDD, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobDD, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobMM, { target: { value: '4' } })
    fireEvent.keyUp(sfInputDobMM, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobMM, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputDobYYYY, { target: { value: '2000' } })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputDobYYYY, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  
  await new Promise((r) => setTimeout(r, TIMEOUT));
  expect(divInput.style.borderColor).not.toBe('#dc3545');

})


it('SfInput: Basic Render Primary Mobile', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

})

it('SfInput: Basic Render Primary Mobile > prefill', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}}  value={{isd: "+91", number: '8411995588'}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

  await new Promise((r) => setTimeout(r, 2000));
  let sfInputMobile = container.getElementsByClassName('sf_input_mobile')[0];
  expect(sfInputMobile.value).toBe('8411995588');

})



it('SfInput: Basic Render Primary Mobile > select ISD', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

  let sfBtn = container.getElementsByClassName('sf_btn')[0];

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');
  expect(container.innerHTML).toContain('Brazil');

  let inputSearch = container.getElementsByClassName('input_search')[0];

  act(() => {
    fireEvent.change(inputSearch, { target: { value: 'ind' } })
    fireEvent.keyUp(inputSearch, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(inputSearch, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');
  expect(container.innerHTML).not.toContain('Brazil');

  let divIn = container.getElementsByClassName('div_IN')[0];

  act(() => {
    fireEvent(
      divIn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

})

it('SfInput: Basic Render Primary Mobile > select ISD > corner cases', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');
  
  let sfInputMobile = container.getElementsByClassName('sf_input_mobile')[0];
  act(() => {
    fireEvent.change(sfInputMobile, { target: { value: '34545' } })
    fireEvent.keyUp(sfInputMobile, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputMobile, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  let sfBtn = container.getElementsByClassName('sf_btn')[0];

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');

  let divAF = container.getElementsByClassName('div_AF')[0];

  act(() => {
    fireEvent(
      divAF,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');

  let divIN = container.getElementsByClassName('div_IN')[0];

  act(() => {
    fireEvent(
      divIN,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

  let spanCaption = container.getElementsByClassName('sf_input_caption')[0];
  act(() => {
    fireEvent(
      spanCaption,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

});

it('SfInput: Basic Render Primary Mobile > select ISD > correct mobile', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput mode="night" inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

  let sfBtn = container.getElementsByClassName('sf_btn')[0];

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));

  let divIn = container.getElementsByClassName('div_IN')[0];

  act(() => {
    fireEvent(
      divIn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');

  let divAF = container.getElementsByClassName('div_AF')[0];

  act(() => {
    fireEvent(
      divAF,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

  let sfInputMobile = container.getElementsByClassName('sf_input_mobile')[0];

  act(() => {
    fireEvent.change(sfInputMobile, { target: { value: 'ind' } })
    fireEvent.keyUp(sfInputMobile, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputMobile, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, 2000));

  let divInput = container.getElementsByClassName('sf_input')[0];
  expect(divInput.style.borderColor).toBe('#dc3545');

  act(() => {
    fireEvent.change(sfInputMobile, { target: { value: '34545' } })
    fireEvent.keyUp(sfInputMobile, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(sfInputMobile, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(divInput.style.borderColor).toBe('#99faff');


});

it('SfInput: Basic Render Primary Mobile > country code button cases', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

  let sfBtn = container.getElementsByClassName('sf_btn')[0];

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');


  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

  act(() => {
    fireEvent(
      sfBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).toContain('India');


  let sfBtnClose = container.getElementsByClassName('sf_btn_countries_close')[0];

  act(() => {
    fireEvent(
      sfBtnClose,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  expect(container.innerHTML).not.toContain('India');

});


it('SfInput: Basic Render Primary Email', async () => {

  act(() => {
    render(<SfInput inputType="email" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_email');

})


it('SfInput: Basic Render Primary Email > correct value entered > enter pressed', async () => {

  const onEnterPressedMock = jest.fn();

  act(() => {
    render(<SfInput inputType="email" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} onEnterPressed={() => {onEnterPressedMock()}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_email');

  let input = container.getElementsByClassName('sf_input_email')[0];
  let div = container.getElementsByClassName('sf_input')[0];

  act(() => {
    fireEvent.change(input, { target: { value: 'hrushi@abc.com' } })
    fireEvent.keyUp(input, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(div.style.borderColor).toBe('#99faff');
  expect(onEnterPressedMock).toHaveBeenCalled();

  act(() => {
    fireEvent.change(input, { target: { value: 'Hrushi 122' } })
    fireEvent.keyUp(input, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(div.style.borderColor).toBe('#dc3545');

}) 


it('SfInput: Basic Render Primary Name', async () => {

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

})

it('SfInput: Basic Render Primary Name Night Mode', async () => {

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true} mode="night"/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

})

it('SfInput: Basic Render Primary Name > correct value entered', async () => {

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

  let input = container.getElementsByClassName('sf_input_name')[0];
  let div = container.getElementsByClassName('sf_input')[0];

  act(() => {
    fireEvent.change(input, { target: { value: 'Hrushi M' } })
    fireEvent.keyUp(input, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(div.style.borderColor).toBe('#99faff');

  act(() => {
    fireEvent.change(input, { target: { value: 'Hrushi 122' } })
    fireEvent.keyUp(input, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(div.style.borderColor).toBe('#dc3545');

}) 

it('SfInput: Basic Render Primary Name > correct value entered > enter pressed', async () => {

  const onEnterPressedMock = jest.fn();

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} onEnterPressed={() => {onEnterPressedMock()}} autoFocus={true} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

  let input = container.getElementsByClassName('sf_input_name')[0];
  let div = container.getElementsByClassName('sf_input')[0];

  act(() => {
    fireEvent.change(input, { target: { value: 'Hrushi M' } })
    fireEvent.keyUp(input, {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35
    })
    fireEvent.keyUp(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(div.style.borderColor).toBe('#99faff');
  expect(onEnterPressedMock).toHaveBeenCalled();

}) 

it('SfInput: Basic Render Primary Name > test onclick', async () => {

  const onEnterPressedMock = jest.fn();

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} onEnterPressed={() => {onEnterPressedMock()}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

  expect(container.querySelector(":focus")).toBe(null);

  let div = container.getElementsByClassName('sf_input')[0];

  console.log(div);

  act(() => {
    fireEvent(
      div,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  await new Promise((r) => setTimeout(r, 2000));
  console.log(container.querySelector(":focus"));

}) 


it('SfButton: Basic Render Primary Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'primary'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(13, 110, 253)")

})


it('SfButton: Basic Render Secondary Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'secondary'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(108, 117, 125)")
})

it('SfButton: Basic Render Danger Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'danger'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(220, 53, 69)")
})

it('SfButton: Basic Render Warning Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'warning'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(255, 193, 7)")
})

it('SfButton: Basic Render Success Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'success'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(25, 135, 84)")
})


it('SfButton: Basic Render Info Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'info'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(13, 202, 240)")
})


it('SfButton: Basic Render Dark Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'dark'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(33, 37, 41)")
})

it('SfButton: Basic Render Light Filled', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'light'} type={'filled'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.backgroundColor).toBe("rgb(248, 249, 250)")
})

it('SfButton: Basic Render Primary Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'primary'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(13, 110, 253)")


})


it('SfButton: Basic Render Secondary Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'secondary'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(108, 117, 125)")
})

it('SfButton: Basic Render Danger Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'danger'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(220, 53, 69)")
})

it('SfButton: Basic Render Warning Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'warning'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(255, 193, 7)")
})

it('SfButton: Basic Render Success Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'success'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(25, 135, 84)")
})


it('SfButton: Basic Render Info Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'info'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(13, 202, 240)")
})


it('SfButton: Basic Render Dark Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'dark'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(33, 37, 41)")
})

it('SfButton: Basic Render Light Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'light'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(248, 249, 250)")
})

it('SfButton: Basic Render Light Outlined', async () => {

  let button = null;

  act(() => {
    render(<SfButton variant={'light'} type={'outlined'} disabled={true} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.disabled).toBe(true)
})

it('SfButton: Color inversion mouseevents', async () => {

  let button: any;

  act(() => {
    render(<SfButton variant={'light'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(248, 249, 250)")
  act(() => {
    fireEvent(
      button,
      new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 100));
  expect(button.style.color).toBe("rgb(0, 0, 0)")

  act(() => {
    fireEvent(
      button,
      new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(button.style.color).toBe("rgb(248, 249, 250)")

})

it('SfButton: Color inversion mouseevents', async () => {

  let button: any;

  act(() => {
    render(<SfButton variant={'light'} type={'outlined'} caption={'Next'} onClick={(event: any) => {console.log('clicked', event);}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(248, 249, 250)")
  act(() => {
    fireEvent(
      button,
      new MouseEvent('touchstart', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 100));
  expect(button.style.color).toBe("rgb(0, 0, 0)")

  act(() => {
    fireEvent(
      button,
      new MouseEvent('touchend', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 2000));
  expect(button.style.color).toBe("rgb(248, 249, 250)")

})

it('SfButton: onClick', async () => {

  const onClickMock = jest.fn();
  let button: any;

  act(() => {
    render(<SfButton variant={'light'} type={'outlined'} caption={'Next'} onClick={(event: any) => {onClickMock()}}/>, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  button = container.getElementsByClassName('sf_btn')[0];
  expect(button.style.color).toBe("rgb(248, 249, 250)")
  act(() => {
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });
  await new Promise((r) => setTimeout(r, 100));
  expect(onClickMock).toHaveBeenCalled();

})
