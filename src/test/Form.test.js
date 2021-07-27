import React from "react";
import Enzyme, { shallow } from "enzyme";

import Form from "../components/Form";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("Form", () => {
  it("Renders a <Form /> component", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("label").text()).toBe("Please enter a number.");
  });

  it("renders a <Form /> component with a Button that says Calculate", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("Button")).toHaveLength(1);
    expect(wrapper.find("Button").text()).toBe("Calculate");
  });
});
