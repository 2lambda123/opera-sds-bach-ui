import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MISSION_TITLE } from "@bach/constants";

import HeaderBar, { LocationDisplay } from "./index";
import { PageTitleContextProvider } from "@bach/contexts/PageTitleContext";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("Location Display test and Header Bar", () => {
  test("checking that location is correct when going to the route", () => {
    const route = "/data-summary/incoming";
    renderWithRouter(<LocationDisplay />, { route });

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });

  const renderComponent = ({ missionTitle, opened }) =>
    render(
      <BrowserRouter>
        <HeaderBar missionTitle={missionTitle} opened={opened} />
      </BrowserRouter>,
      {
        wrapper: PageTitleContextProvider,
      }
    );

  test("renders HeaderBar component", () => {
    const opened = true;

    const { getByText } = renderComponent({
      opened,
      missionTitle: MISSION_TITLE,
    });

    expect(getByText(MISSION_TITLE)).toBeInTheDocument();
  });
});
