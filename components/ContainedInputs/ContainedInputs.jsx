import { Select, TextInput } from '@mantine/core';
import classes from './ContainedInput.module.css';

export function ContainedInputs() {
  return (
    <div className=''>
      <TextInput label="Height" placeholder="250px(default)" classNames={classes} />
      <TextInput label="Width" placeholder="200px(default)" classNames={classes} />
    </div>
  );
}