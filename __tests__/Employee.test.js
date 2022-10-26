const Employee = require("../lib/Employee");
const employee = new Employee("Jane Doe", "123456", "janedoe@123.com");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object made from the Employee constructor with the properties 'name', 'id', and 'email'", () => {
      expect(employee.name).toBe("Jane Doe");
      expect(employee.id).toBe("123456");
      expect(employee.email).toBe("janedoe@123.com");
    });
  });

  describe("getName() method", () => {
    it("should return the name of the employee", () => {
      expect(employee.getName()).toBe("Jane Doe");
    });
  });

  describe("getID() method", () => {
    it("should return the employee ID of the employee", () => {
      expect(employee.getID()).toBe("123456");
    });
  });

  describe("getEmail() method", () => {
    it("should return the email of the employee", () => {
      expect(employee.getEmail()).toBe("janedoe@123.com");
    });
  });

  describe("getRole() method", () => {
    it("should return the role of the employee", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
