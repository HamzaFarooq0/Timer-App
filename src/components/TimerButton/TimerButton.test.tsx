import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerButton from "./TimerButton"

describe("<TimerButton />", () => {
  let container:ShallowWrapper

  beforeEach(() => (container = shallow(<TimerButton setTimerInSeconds={() => {}}/>)))

  it("should render the Timer Component", () => {
    expect(container.find('button').length).toEqual(3)
  })
})