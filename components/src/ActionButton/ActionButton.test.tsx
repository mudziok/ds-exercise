import { ActionButton } from "./ActionButton";
import { fireEvent, render } from "@testing-library/react"

describe("ActionButton", () => {
    it("renders its children", () => {
        const { getByText } = render(<ActionButton label="Press me"></ActionButton>);

        expect(getByText("Press me")).toBeTruthy();
    });

    it("reacts to being pressed", () => {
        const pressCallback = jest.fn();

        const { getByRole } = render(<ActionButton label="Active" onClick={pressCallback}></ActionButton>);
        fireEvent.click(getByRole('button'));

        expect(pressCallback).toBeCalled();
    });

    it("ignores clicks when disabled", () => {
        const pressCallback = jest.fn();

        const { getByRole } = render(<ActionButton label="Disabled" onClick={pressCallback} disabled={true}></ActionButton>);
        fireEvent.click(getByRole('button'));

        expect(pressCallback).not.toBeCalled();
    });

    it("disallows label to be longer that 100 characters", () => {
        const longLabel = "a".repeat(101);

        const { queryByRole } = render(<ActionButton label={longLabel} onClick={()=>{}} disabled={false}></ActionButton>);

        expect(queryByRole('button')).toBeNull();
    })
})