import Home, { buttonItems } from "@/pages"
import { fireEvent, render, screen } from "@testing-library/react"

let i = 0;

describe("calculator test", () => {
  it("Test default screen value is 0", () => {
    const {
      container
    } = render(<Home />);
    const Screen = container.querySelector("#screen")?.textContent;
    expect(Screen).toBe("0");

    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(16)
  });
  it.each(buttonItems)(`Test buttonItems includes all button textContent`, (value, done) => {
    expect(value).toBe(buttonItems[i])
    i++;
    done();
  });
  it("Test 1 + 1 to be 2", () => {
    const {
      container
    } = render(<Home />);

    // 1をクリック
    const button_1 = container.querySelector("#button_1");
    fireEvent.click(button_1!);

    // スクリーンの値が1であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("1")

    // +をクリック
    const button_plus = container.querySelector("#button_plus");
    fireEvent.click(button_plus!);

    // スクリーンの値が+であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("+")

    // 1をクリック
    fireEvent.click(button_1!);

    // スクリーンの値が1であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("1")

    // =をクリック
    const button_calc = container.querySelector("#button_calc");
    
    fireEvent.click(button_calc!);

    // スクリーンの値が2であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("2")
  })
  it("Test 12 + 45 to be 57", () => {
    const {
      container
    } = render(<Home />);

    // 1をクリック
    const button_1 = container.querySelector("#button_1");
    fireEvent.click(button_1!);

    // スクリーンの値が1であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("1")

    // 2をクリック
    const button_2 = container.querySelector("#button_2");
    fireEvent.click(button_2!);

    // スクリーンの値が12であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("12")

    // +をクリック
    const button_plus = container.querySelector("#button_plus");
    fireEvent.click(button_plus!);

    // スクリーンの値が+であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("+")

    // 4をクリック
    const button_4 = container.querySelector("#button_4");
    fireEvent.click(button_4!);

    // スクリーンの値が4であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("4")

    // 5をクリック
    const button_5 = container.querySelector("#button_5");
    fireEvent.click(button_5!);

    // スクリーンの値が45であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("45")
    
    // =をクリック
    const button_calc = container.querySelector("#button_calc");
    
    fireEvent.click(button_calc!);

    // スクリーンの値が2であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("57")
  });
  it("Test 160 - 45 to be 115", () => {
    const {
      container
    } = render(<Home />);

    // 1をクリック
    const button_1 = container.querySelector("#button_1");
    fireEvent.click(button_1!);

    // スクリーンの値が1であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("1")

    // 6をクリック
    const button_6 = container.querySelector("#button_6");
    fireEvent.click(button_6!);

    // スクリーンの値が12であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("16")

    // 0をクリック
    const button_0 = container.querySelector("#button_0");
    fireEvent.click(button_0!);

    // スクリーンの値が160であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("160")

    // -をクリック
    const button_sub = container.querySelector("#button_sub");
    fireEvent.click(button_sub!);

    // スクリーンの値が-であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("-")

    // 4をクリック
    const button_4 = container.querySelector("#button_4");
    fireEvent.click(button_4!);

    // スクリーンの値が4であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("4")

    // 5をクリック
    const button_5 = container.querySelector("#button_5");
    fireEvent.click(button_5!);

    // スクリーンの値が45であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("45")
    
    // =をクリック
    const button_calc = container.querySelector("#button_calc");
    
    fireEvent.click(button_calc!);

    // スクリーンの値が115であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("115")
  });
  it("Test 52 * 5 to be 260", () => {
    const {
      container
    } = render(<Home />);

    // 5をクリック
    const button_5 = container.querySelector("#button_5");
    fireEvent.click(button_5!);

    // スクリーンの値が5であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("5")

    // 2をクリック
    const button_2 = container.querySelector("#button_2");
    fireEvent.click(button_2!);

    // スクリーンの値が52であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("52")

    // *をクリック
    const button_mul = container.querySelector("#button_mul");
    fireEvent.click(button_mul!);

    // スクリーンの値が*であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("*")

    // 5をクリック
    fireEvent.click(button_5!);
    
    // =をクリック
    const button_calc = container.querySelector("#button_calc");
    
    fireEvent.click(button_calc!);

    // スクリーンの値が260であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("260")
  });
  it("Test 160 / 4 to be 40", () => {
    const {
      container
    } = render(<Home />);

    // 1をクリック
    const button_1 = container.querySelector("#button_1");
    fireEvent.click(button_1!);

    // スクリーンの値が1であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("1")

    // 6をクリック
    const button_6 = container.querySelector("#button_6");
    fireEvent.click(button_6!);

    // スクリーンの値が12であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("16")

    // 0をクリック
    const button_0 = container.querySelector("#button_0");
    fireEvent.click(button_0!);

    // スクリーンの値が160であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("160")

    // /をクリック
    const button_div = container.querySelector("#button_div");
    fireEvent.click(button_div!);

    // スクリーンの値が/であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("/")

    // 4をクリック
    const button_4 = container.querySelector("#button_4");
    fireEvent.click(button_4!);

    // スクリーンの値が4であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("4")
    
    // =をクリック
    const button_calc = container.querySelector("#button_calc");
    
    fireEvent.click(button_calc!);

    // スクリーンの値が40であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("40")
  });
  it("Test click 'C' reset screen value", () => {
    const {
      container
    } = render(<Home />);

    // 1をクリック
    const button_1 = container.querySelector("#button_1");
    fireEvent.click(button_1!);
    fireEvent.click(button_1!);
    fireEvent.click(button_1!);
    fireEvent.click(button_1!);
    fireEvent.click(button_1!);
    fireEvent.click(button_1!);

    // スクリーンの値が111111であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("111111");

    // Cをクリック
    const button_reset = container.querySelector("#button_reset");
    fireEvent.click(button_reset!);
    
    // スクリーンの値が0であることを確認
    expect(container.querySelector("#screen")?.textContent).toBe("0");
  })
})