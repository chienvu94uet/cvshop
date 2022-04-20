function Validator(formSelector, options = {}) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  const formElement = document.querySelector(formSelector);

  var formRules = {};
  if (formElement) {
    const validatorRules = {
      required: function (value) {
        return value ? undefined : "This field is required";
      },
      min: function (min) {
        return function (value) {
          return value.length >= min
            ? undefined
            : `This field is at least ${min} character`;
        };
      },
    };

    const inputs = formElement.querySelectorAll("input[rules][name]");

    for (var input of inputs) {
      let rules = input.getAttribute("rules").split("|");
      for (let rule of rules) {
        var isRuleHasValue = rule.includes(":");
        var ruleInfo;
        if (isRuleHasValue) {
          ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }
        var ruleFunc = validatorRules[rule];
        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        if (Array.isArray(formElement[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }

      input.onblur = handleValidate;
      input.oninput = handleClearError;
    }
  }

  function handleClearError(event) {
    const formGroup = getParent(event.target, ".form-group");
    if (!formGroup) return;
    if (formGroup.classList.contains("invalid")) {
      formGroup.classList.remove("invalid");
    }
    const formMessage = formGroup.querySelector(".form-message");
    if (!formMessage) return;
    formMessage.innerText = "";
  }

  function handleValidate(event) {
    var rules = formRules[event.target.name];

    var errorMessage;
    for (var rule of rules) {
      errorMessage = rule(event.target.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      const formGroup = getParent(event.target, ".form-group");
      if (!formGroup) return;
      formGroup.classList.add("invalid");
      const formMessage = formGroup.querySelector(".form-message");
      if (!formMessage) return;
      formMessage.innerText = errorMessage;
    }

    return !errorMessage;
  }

  formElement.onsubmit = function (event) {
    event.preventDefault();
    const inputs = formElement.querySelectorAll("input[rules][name]");
    var isValid = true;
    for (let input of inputs) {
      if (!handleValidate({ target: input })) {
        isValid = false;
      }
    }

    if (isValid) {
      if (typeof options.onSubmit === "function") {
        var enableInputs = formElement.querySelectorAll("[name]");
        var formValues = {};
        for (var input of enableInputs) {
          formValues[input.name] = input.value;
        }
        return options.onSubmit(formValues);
      }

      formElement.submit();
    }
  };
}

export default Validator;
