import { writable } from "svelte/store";

export function createFormStore(initialData) {
  const form = writable(initialData);
  const errors = writable({});

  function validate(node, validators = []) {
    node.onblur = checkValidity(node, validators);
  }

  const checkValidity = (element, validators) => () => {
    errors.update((_errors) => {
      _errors[element.name] = [];
      return _errors;
    });

    for (const validator of validators) {
      const errorMessage = validator(element);

      if (errorMessage) {
        errors.update((_errors) => {
          _errors[element.name].push(errorMessage);
          return _errors;
        });
      }
    }
  };

  return {
    validate,
    form,
    errors: { subscribe: errors.subscribe }
  };
}

export function maxLengthValidator(element, maxLength = 20) {
  if (element.value.length < maxLength) {
    return "";
  }

  return `${element.name} should be less than ${maxLength} characters`;
}

export function minLengthValidator(element, minLength = 7) {
  if (element.value.length < minLength) {
    return `${element.name} should be at least ${minLength} characters`;
  }

  return "";
}

export function fullNameValidator(element, minNameLength = 2) {
  const names = element.value.trim().split(/\s+/); // Split by one or more spaces
  if (names.length < 2) {
    return `${element.name} must include at least a first name and a last name.`;
  }

  // Check each part of the name for minimum length
  if (names.some((name) => name.length < minNameLength)) {
    return `${element.name} each part must be at least ${minNameLength} characters.`;
  }

  return "";
}

export function usernameValidator(element, minLength = 4, maxLength = 20) {
  const usernameRegex = /^\w+$/; // \w matches letters, numbers, and underscores
  if (element.value.length < minLength) {
    return `${element.name} should be at least ${minLength} characters.`;
  }

  if (element.value.length > maxLength) {
    return `${element.name} should be no more than ${maxLength} characters.`;
  }

  if (!usernameRegex.test(element.value)) {
    return `${element.name} should only contain letters, numbers, and underscores.`;
  }

  return "";
}

export function emailValidator(element) {
  // Simple regex for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(element.value)) {
    return `${element.name} is not a valid email address.`;
  }

  return "";
}

export function passwordValidator(element, options = {}) {
  const {
    minLength = 8, // Default minimum length
    maxLength = 128, // Default maximum length
    requireNumbers = true, // Require at least one number
    requireLowercase = true, // Require at least one lowercase letter
    requireUppercase = true, // Require at least one uppercase letter
    requireSpecialChars = true // Require at least one special character
  } = options;

  const value = element.value;
  const errors = [];

  if (value.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long.`);
  }

  if (value.length > maxLength) {
    errors.push(`Password must be no more than ${maxLength} characters long.`);
  }

  if (requireNumbers && !/\d/.test(value)) {
    errors.push("Password must contain at least one number.");
  }

  if (requireLowercase && !/[a-z]/.test(value)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  if (requireUppercase && !/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  if (requireSpecialChars && !/[\W_]/.test(value)) {
    // \W is non-word characters, and _ is underscore
    errors.push("Password must contain at least one special character.");
  }

  return errors.length > 0 ? errors.join("\n") : "";
}
