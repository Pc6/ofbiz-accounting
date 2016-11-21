
// 生成符合ofbiz的soap协议的传值对象，arg为传值对象
export function soapCreator(arg) {
  const obj = {
    'map-Map': {
      'map-Entry': []
    }
  };
  for (const key in arg) {
    if (Object.hasOwnProperty.call(arg, key)) {
      obj['map-Map']['map-Entry'].push({
        'map-Key': {
          'std-String': {
            'attributes': {
              'value': key
            }
          }
        },
        'map-Value': {
          'std-String': {
            'attributes': {
              'value': arg[key]
            }
          }
        }
      });
    }
  }
  return obj;
}

// 解析返回的soap对象，并获取指定的值，keys为打算取得返回值的属性名组成的数组
export function soapParser(obj, keys) {
  const result = {};
  const entries = obj['map-Map']['map-Entry'];
  for (const entry of entries) {
    const { 'map-Key': mapKey, 'map-Value': mapValue } = entry;
    if (keys.indexOf(mapKey['std-String']['attributes']['value']) !== -1) {
      const key = mapKey['std-String']['attributes']['value'];
      result[key] = mapValue;
    }
  }
  return result;
}

export function getWSDL(method) {
  return `https://localhost:8443/accounting/control/SOAPService/${method}?wsdl`;
}
