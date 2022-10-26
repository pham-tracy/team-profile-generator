const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Sally Mae", "24", "sm@abc.com", "sm24");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object made from the Engineer constructor with the properties 'name', 'id', 'email', and 'github'", () => {
      expect(engineer.name).toBe("Sally Mae");
      expect(engineer.id).toBe("24");
      expect(engineer.email).toBe("sm@abc.com");
    });
  });

  describe("getGithub() method", () => {
    it("should return the GitHub username of the Engineer", () => {
      expect(engineer.getGithub()).toBe("sm24");
    });
  });

  describe("getID() method", () => {
    it("should return the employee ID of the employee", () => {
      expect(engineer.getID()).toBe("24");
    });
  });

  describe("getEmail() method", () => {
    it("should return the email of the employee", () => {
      expect(engineer.getEmail()).toBe("sm@abc.com");
    });
  });

  describe("getRole() method", () => {
    it("should return the role of the Engineer", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
