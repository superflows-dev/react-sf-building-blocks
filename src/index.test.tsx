import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fireEvent, screen} from '@testing-library/react'
import { SfButton } from '.'
import { SfInput } from '.'

import '@testing-library/jest-dom/extend-expect';

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

it('SfInput: Basic Render Primary Mobile', async () => {

  jest.setTimeout(30000);

  act(() => {
    render(<SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_mobile');

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
