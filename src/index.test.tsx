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

it('SfInput: Basic Render Primary Name', async () => {

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} />, container);
  });
  await new Promise((r) => setTimeout(r, 200));
  expect(container.innerHTML).toContain('sf_input_name');

})

it('SfInput: Basic Render Primary Name', async () => {

  act(() => {
    render(<SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}} autoFocus={true}/>, container);
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
  await new Promise((r) => setTimeout(r, 1000));
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
  await new Promise((r) => setTimeout(r, 1000));
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
      key: "Enter",
      code: "Enter",
      keyCode: 35,
      charCode: 35
    })
  });
  await new Promise((r) => setTimeout(r, 1000));
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

  await new Promise((r) => setTimeout(r, 1000));
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
  await new Promise((r) => setTimeout(r, 1000));
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
  await new Promise((r) => setTimeout(r, 1000));
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
