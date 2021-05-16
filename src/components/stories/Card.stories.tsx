import { Meta, Story } from "@storybook/react"

import { Card, CardProps } from "../Card"

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: "auto", width: 260, height: "100vh" }}>
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

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Image = Template.bind({})
Image.args = {
  title: "Title",
}
