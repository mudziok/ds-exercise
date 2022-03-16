import { ActionButton } from "./ActionButton";
import { fireEvent, render } from "@testing-library/react"

describe("ActionButton", () => {
    it("renders its children", () => {
        const { getByText } = render(<ActionButton>Press me</ActionButton>);

        expect(getByText("Press me")).toBeTruthy();
    });

    it("reacts to being pressed", () => {
        const pressCallback = jest.fn();

        const { getByRole } = render(<ActionButton onClick={pressCallback}>Press me</ActionButton>);
        fireEvent.click(getByRole('button'));

        expect(pressCallback).toBeCalled();
    });

    it("ignores clicks when disabled", () => {
        const pressCallback = jest.fn();

        const { getByRole } = render(<ActionButton onClick={pressCallback} disabled={true}>Press me</ActionButton>);
        fireEvent.click(getByRole('button'));

        expect(pressCallback).not.toBeCalled();
    });
})