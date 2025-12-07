import { useState, useEffect } from "react";

/**
 * Hook for managing checkbox selections with required validation
 * @param {Array} initialValues - initial selected values
 * @param {string} fieldName - the name of the field (for error message)
 */
export const useRequiredCheckboxes = (initialValues = [], fieldName = "field") => {
  const [selected, setSelected] = useState(initialValues);
  const [error, setError] = useState("");

  const toggle = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const validate = () => {
    if (selected.length === 0) {
      setError(`Please select at least one ${fieldName}.`);
      return false;
    }
    setError("");
    return true;
  };

  // Optional: reset error when selection changes
  useEffect(() => {
    if (selected.length > 0) setError("");
  }, [selected]);

  return { selected, toggle, error, validate };
};
