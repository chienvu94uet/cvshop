export function buildDropdown(countries) {
  let result = '<option value="">Please select</option>';
  for (let country of countries) {
    result += `<option value=${country.toLowerCase()}>${country}</option>`;
  }
  return result;
}
