import React from "react";
import Enzyme, { shallow, mount } from "enzyme";

import DivisibleResults from "../components/DivisibleResults";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("Form", () => {
  it("Renders a <DivisibleResults /> component", () => {
    const wrapper = shallow(<DivisibleResults number={0} />);
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("p").text()).toBe("undefined");
  });

  it("renders a <DivisibleResults /> with text of number that can divide into 8", () => {
    const wrapper = shallow(<DivisibleResults number={8} />);
    expect(wrapper.find(".results p")).toHaveLength(3);
    expect(wrapper.find(".results p").at(0).text()).toContain(
      "is divisible by 2"
    );
    expect(wrapper.find(".results p").at(1).text()).toContain(
      "is divisible by 4"
    );
    expect(wrapper.find(".results p").at(2).text()).toContain(
      "is divisible by 8"
    );
  });

  it("renders a <DivisibleResults /> with text of number that can divide into 45", () => {
    const wrapper = shallow(<DivisibleResults number={45} />);
    expect(wrapper.find(".results p")).toHaveLength(3);
    expect(wrapper.find(".results p").at(0).text()).toContain(
      "is divisible by 3"
    );
    expect(wrapper.find(".results p").at(1).text()).toContain(
      "is divisible by 5"
    );
    expect(wrapper.find(".results p").at(2).text()).toContain(
      "is divisible by 9"
    );
  });

  it("renders a <DivisibleResults /> with text of number that can divide into 42", () => {
    const wrapper = shallow(<DivisibleResults number={42} />);
    expect(wrapper.find(".results p")).toHaveLength(4);
    expect(wrapper.find(".results p").at(0).text()).toContain(
      "is divisible by 2"
    );
    expect(wrapper.find(".results p").at(1).text()).toContain(
      "is divisible by 3"
    );
    expect(wrapper.find(".results p").at(2).text()).toContain(
      "is divisible by 6"
    );
    expect(wrapper.find(".results p").at(3).text()).toContain(
      "is divisible by 7"
    );
  });
});
