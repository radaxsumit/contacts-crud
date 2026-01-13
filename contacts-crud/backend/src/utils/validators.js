export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  // simple validation: 10-15 digits allowed
  return /^[0-9]{10,15}$/.test(phone);
}

export function validateContactPayload({ name, email, phone }) {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name is required (min 2 characters).";
  }
  if (!email || !isValidEmail(email)) {
    errors.email = "Valid email is required.";
  }
  if (!phone || !isValidPhone(phone)) {
    errors.phone = "Phone must be 10 to 15 digits.";
  }

  return errors;
}
