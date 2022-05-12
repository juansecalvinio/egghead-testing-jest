export default arrayify;

function arrayify(input = []) {
  return Array.isArray(input) ? input : [input];
}