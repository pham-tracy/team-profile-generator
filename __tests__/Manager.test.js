const Manager = require("../lib/Manager");
const manager = new Manager("Hana Bee", "1000", "hanabee@me.com", "200");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object made from the Manager constructor with the properties 'name', 'id',  'email', and 'officeNumber'", () => {
      expect(manager.name).toBe("Hana Bee");
      expect(manager.id).toBe("1000");
      expect(manager.email).toBe("hanabee@me.com");
    });
  });

  describe("getOfficeNumber() method", () => {
    it("should return the office number of the manager", () => {
      expect(manager.getOfficeNumber()).toBe("200");
    });
  });

  describe("getRole() method", () => {
    it("should return the role of the Manager", () => {
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
