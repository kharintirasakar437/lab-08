// Tests for the to-do app. Run with: npm test
// They describe what App must do once you've added state + the handlers.
import { test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

test("renders the initial todos", () => {
  render(<App />);
  expect(screen.getByText("Build the to-do list")).toBeTruthy();
  expect(screen.getByText("Add one of your own")).toBeTruthy();
});

test("shows a derived done count", () => {
  render(<App />);
  // one of the three starts done
  expect(screen.getByText(/1 of 3 done/i)).toBeTruthy();
});

test("adds a todo from the form", async () => {
  render(<App />);
  await userEvent.type(screen.getByPlaceholderText(/add a todo/i), "Walk the dog");
  await userEvent.click(screen.getByRole("button", { name: /^add$/i }));
  expect(screen.getByText("Walk the dog")).toBeTruthy();
});

test("toggles a todo's done state", async () => {
  render(<App />);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes[1].checked).toBe(false); // "Build the to-do list" starts not done
  await userEvent.click(checkboxes[1]);
  expect(checkboxes[1].checked).toBe(true);
  expect(screen.getByText(/2 of 3 done/i)).toBeTruthy(); // count updates too
});

test("deletes a todo", async () => {
  render(<App />);
  const item = screen.getByText("Build the to-do list").closest("li");
  await userEvent.click(within(item).getByRole("button", { name: /delete/i }));
  expect(screen.queryByText("Build the to-do list")).toBeNull();
});
