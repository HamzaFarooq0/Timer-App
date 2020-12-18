import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import App from "./App"

describe("<App />", () => {
  let container:ShallowWrapper

  beforeEach(() => (container = shallow(<App />)))

  it("should render the Timer Component", () => {
    expect(container.find('TimerButton').length).toEqual(1)
  })

  it("should render the <p /> Tag", () => {
    expect(container.find('p').length).toEqual(3)
  })

})