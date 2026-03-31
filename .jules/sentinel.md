## 2024-05-15 - Unbounded Input Size Limits (DoS Risk)
**Vulnerability:** Input fields (`Input` and `TextArea`) did not enforce maximum length limits natively, allowing unbounded user input size.
**Learning:** This is an application-level DoS vector, where unusually large inputs can cause excessive memory allocation and potentially stall rendering or degrade system performance over time.
**Prevention:** All user text inputs should impose a default reasonable `maxLength` attribute directly on the underlying HTML elements. Next time, make sure input wrappers default to `maxLength=255` for single lines and `maxLength=1000` for textareas unless explicitly overridden.
