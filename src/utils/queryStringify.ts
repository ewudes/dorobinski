function queryStringify(data: Record<string, any>) {
  if (typeof data !== "object") {
    throw new Error("Тело запроса должно быть объектом");
  }

  const keys = Object.keys(data);

  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${
      index < keys.length - 1 ? "&" : ""
    }`;
  }, "?");
}

export default queryStringify;
