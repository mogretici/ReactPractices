import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header.js";
import App from "./App.js";

describe("Test for patika.dev", () => {
  test("Başlık kısmının başarılı bir şekilde render edilmesi ", () => {
    render(<Header />);
    const head = screen.getByText("Emoji Search");
    expect(head).toBeInTheDocument();
  });
  test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edilmesi ", () => {
    render(<App />);
    const items = screen.getAllByText(/Click to copy emoji/i);
    const item = screen.getByText("Relaxed");
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });
  test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edilmesi ", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Search for emoji");
    userEvent.type(input, "yu");
    let item = screen.getByText("Yum");
    expect(item).toBeInTheDocument();
  });
  test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalanması ", () => {
    render(<App />);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
