export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 50;
}

export function isValidDepartment(department: string): boolean {
  return department.length >= 2 && department.length <= 50;
}