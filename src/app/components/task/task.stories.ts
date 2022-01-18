import { Story, Meta } from '@storybook/angular';
import { TaskComponent } from './task.component';

export default {
  title: 'UIKit/Task',
  component: TaskComponent,
  argTypes: {},
} as Meta;

const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  component: TaskComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Urgent = Template.bind({});
Urgent.args = {
  isUrgent: true,
};
