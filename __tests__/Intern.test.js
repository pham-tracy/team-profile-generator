const Intern = require("../lib/Intern");
const intern = new Intern("Bob Baker", "235", "bakerb@bread.com", "UW");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object made from the Intern constructor with the properties 'name', 'id', 'email', and 'school'", () => {
      expect(intern.name).toBe("Bob Baker");
      expect(intern.id).toBe("235");
      expect(intern.email).toBe("bakerb@bread.com");
      expect(intern.school).toBe("UW");
    });
  });

  describe("getSchool() method", () => {
    it("should return the name of the intern's school", () => {
      expect(intern.getSchool()).toBe("UW");
    });
  });

  describe("getRole() method", () => {
    it("should return the role of the Intern", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
