import { render, screen } from "@testing-library/react";
import App from "./App";
import StoreList from "./components/StoreList";

test("renders store list text", () => {
    render(<App />);
    const text = screen.getByText(/store list/i);
    expect(text).toBeInTheDocument();
});

it("matches the snapshop", () => {
    const snapshot = render(
        <StoreList stores={[]} sale={false} loadData={() => {}} />
    );

    expect(snapshot).toMatchSnapshot();
});
