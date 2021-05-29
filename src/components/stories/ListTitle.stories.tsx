import { Meta, Story } from "@storybook/react"
import { lightTheme } from "../../theme"

import { ListTitle, ListTitleProps } from "../ListTitle"

export default {
  title: "Components/List Title",
  component: ListTitle,
  decorators: [
    (Story) => (
      <div style={{ width: 260 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "Gradient",
    },
  },
} as Meta

const Template: Story<ListTitleProps> = (args) => <ListTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "About",
  backgroundColor: lightTheme.colors.sky500,
}
