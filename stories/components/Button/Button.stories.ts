// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common'
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from 'projects/storybook/src/lib/button/button.component';
import { ButtonModule } from 'projects/storybook/src/lib/button/button.module';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, CommonModule, ]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: any) => ({
  props: args,
});

export const Large: Story<ButtonComponent> = Template.bind({});
Large.args = {
  ...Template.args,
  id: 'btn_l',
  label: 'Button Large',
  size: 'large'
};

export const Medium: Story<ButtonComponent> = Template.bind({});
Medium.args = {
  ...Template.args,
  backgroundColor: 'green',
  id: 'btn_m',
  label: 'Button Medium',
  size: 'medium'
};

export const Small: Story<ButtonComponent> = Template.bind({});
Small.args = {
  ...Template.args,
  backgroundColor: 'red',
  id: 'btn_s',
  label: 'Button Small',
  size: 'small'
};
