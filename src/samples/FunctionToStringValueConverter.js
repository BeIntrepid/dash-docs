export class FunctionToStringValueConverter{
  toView(value) {
    var entire = value.toString();
    return entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
  }
}
