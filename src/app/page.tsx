'use client';

import { Toggle } from './components/Toggle';
import { Button } from './components/Button';
import { AddressBook } from '@phosphor-icons/react';
import { Checkbox } from './components/Checkbox';
import { useState } from 'react';

const messages = [
  {
    label: 'Do Something for 1 hour',
    value: 'primeiro',
    id: 'a',
    name: 'a',
    checked: true
  },
  {
    label: 'Do Something for 2 hour',
    value: 'segundo',
    id: 'b',
    name: 'b',
    checked: true
  }
];

const checkList = ['Apple', 'Banana', 'Tea', 'Coffee'];

export default function Home() {
  const [items, setItems] = useState(messages);
  const [checked, setChecked] = useState([]);
  const [toggleSelected, setToggleSelected] = useState(false);

  function handleChangeCheckbox(event: any) {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  }

  function handleChangeToggle(event: any) {
    setToggleSelected(event.target.checked);
  }

  console.log(checked);
  console.log(toggleSelected);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <Toggle checked={toggleSelected} onChange={handleChangeToggle} />

        <Button className="m-1" roundedLg variant="danger">
          <AddressBook color="white" size={32} /> Tertiary{' '}
          <AddressBook color="white" size={32} />
        </Button>

        {items &&
          items.map((item, i) => (
            <ul key={i}>
              <Checkbox
                label={item.label}
                value={item.value}
                onChange={handleChangeCheckbox}
              />
            </ul>
          ))}

        {/* <Checkbox label='Do Something for 1 hour' value='primeiro' onChange={() => handleChangeCheckbox('primeiro')} /> */}
        {/* <Checkbox label='Do Something for 2 hour' value='segundo' onChange={() => handleChangeCheckbox('segundo')}/> */}
      </div>
    </main>
  );
}
