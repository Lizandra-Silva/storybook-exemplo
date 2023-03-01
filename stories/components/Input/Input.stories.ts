import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { InputComponent } from "projects/storybook/src/lib/input/input.component";
import { InputModule } from "projects/storybook/src/lib/input/input.module";

export default {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule, CommonModule]
    })
  ]
} as Meta;

const Template: Story<InputComponent> = (args: any) => ({
  props: args
});

export const TextInput: Story<InputComponent> = Template.bind({});
TextInput.args = {
  ...Template.args,
  type: 'text',
  placeholder: 'Input Text Here',
  label: 'Text Input',
  id: 'input_id',
};

export const PasswordInput: Story<InputComponent> = Template.bind({});
PasswordInput.args = {
  ...Template.args,
  type: 'password',
  placeholder: 'Password Here',
  label: 'Password Input',
  id: 'password_id',
}
