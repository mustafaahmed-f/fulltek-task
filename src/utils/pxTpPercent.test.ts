import { pxToPercent } from "./pxToPercent";

describe("pxTpPercent()", () => {
  it("should give the desired section percentage", () => {
    expect(Math.floor(pxToPercent(174))).toBe(16);
  });
});
