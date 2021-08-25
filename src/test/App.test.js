import React from "react";
import App from "../App";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("Renders an app", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("App")).toHaveLength(1);
  });
});
