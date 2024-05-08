import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoreList from "./StoreList";

it("should render a button", () => {
    // render the component
    render(<StoreList stores={[]} sale={false} loadData={() => {}} />);

    // find the button
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it("should apply a class of sale based on the sale prop", () => {
    const { container } = render(
        <StoreList stores={[]} sale={true} loadData={() => {}} />
    );

    const hasSaleClass = container.firstChild.classList.contains("sale");
    expect(hasSaleClass).toBe(true);
});

it("should render a list of StoreCards based on the stores prop", () => {
    const mockStores = [
        { id: 1, address: "abc123" },
        { id: 2, address: "abc123" },
        { id: 3, address: "abc123" },
    ];

    render(<StoreList stores={mockStores} sale={false} loadData={() => {}} />);

    const storesList = screen.getAllByText(/abc123/i); // note necessity of using regex...if string used, will fail
    expect(storesList.length).toEqual(mockStores.length);
});

it("should call loadData when the button is clicked", () => {
    const mockLoadData = jest.fn();
    render(<StoreList stores={[]} sale={false} loadData={mockLoadData} />);

    //   const button = screen.getByText(/load more stores/i);  // both these button definition options work
    const button = screen.getByRole("button");
    userEvent.click(button);

    // expect(mockLoadData).toBeCalled();
    expect(mockLoadData).toHaveBeenCalled();
});

it("matches the snapshop", () => {
    const mockStores = [
        { id: 1, address: "abc123" },
        { id: 2, address: "abc123" },
        { id: 3, address: "abc123" },
    ];

    const snapshot = render(
        <StoreList stores={mockStores} sale={false} loadData={() => {}} />
    );

    expect(snapshot).toMatchSnapshot();
});
