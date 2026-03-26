// Tests for utility functions used in the React app

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

describe("getInitials", () => {
  test("returns two initials for full name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  test("returns one initial for single name", () => {
    expect(getInitials("Alice")).toBe("A");
  });

  test("returns uppercase initials", () => {
    expect(getInitials("jane smith")).toBe("JS");
  });
});

describe("User data validation", () => {
  const mockUser = {
    id: 1,
    name: "Leanne Graham",
    email: "sincere@april.biz",
    phone: "1-770-736-8031",
    website: "hildegard.org",
    company: { name: "Romaguera-Crona" },
    address: { city: "Gwenborough" }
  };

  test("user has required fields", () => {
    expect(mockUser).toHaveProperty("id");
    expect(mockUser).toHaveProperty("name");
    expect(mockUser).toHaveProperty("email");
    expect(mockUser).toHaveProperty("company.name");
    expect(mockUser).toHaveProperty("address.city");
  });

  test("user id is a number", () => {
    expect(typeof mockUser.id).toBe("number");
  });

  test("user email contains @", () => {
    expect(mockUser.email).toContain("@");
  });
});
