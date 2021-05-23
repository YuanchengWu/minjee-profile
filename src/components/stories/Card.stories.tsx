import { Meta, Story } from "@storybook/react"

import { Card, CardProps, CardVariant } from "../Card"
import ProfilePic from "../../images/linkedin-profile-edited.jpg"
import Samsung from "../../images/samsung.svg"

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ width: 260, backgroundRepeat: "no-repeat" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: CardVariant,
      control: {
        type: "radio",
      },
      defaultValue: CardVariant.Icon,
    },
  },
  parameters: {
    backgrounds: {
      default: "Gradient",
    },
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Icon = Template.bind({})
Icon.args = {
  variant: CardVariant.Icon,
  title: "Bilingual Facility Planner",
  textContent: "Samsung Research America",
  label: "Jun 2019 — May 2020",
  src: Samsung,
}

export const Icons = Template.bind({})
Icons.args = {
  variant: CardVariant.Icons,
  title: "Softwares",
  textContent:
    "JIRA | Trello | SharePoint Computer-Aided Translation (CAT) Translation Management System (TMS) Photoshop | Illustrator",
  icons: [
    { src: Samsung },
    { src: Samsung },
    { src: Samsung },
    { src: Samsung },
    { src: Samsung },
  ],
}

export const Image = Template.bind({})
Image.args = {
  variant: CardVariant.Image,
  title: "I’m a Project Manager.",
  textContent:
    "Also a Designer with a keen eye for creating marketable, accessible, and localizable products",
  src: ProfilePic,
}
