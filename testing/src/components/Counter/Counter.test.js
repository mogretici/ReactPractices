import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Test", () => {
  let count;
  
  test("increaseBtnTest", () => {
    render(<Counter />)
    count = screen.getByText("0");
    const increaseBtn = screen.getByText("Increase");
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });
  test("decreaseBtnTest", () => {
    render(<Counter />)
    count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease");
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
