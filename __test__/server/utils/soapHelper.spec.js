import { soapCreator, soapParser, getWSDL }
  from '../../../src/server/utils/soapHelper';

describe('soapCreator', () => {
  it('creates soap object', () => {
    const obj = soapCreator({ orderId: 'Demo1002' });
    expect(obj).toEqual({
      'map-Map': {
        'map-Entry': [
          {
            'map-Key': {
              'std-String': {
                'attributes': {
                  'value': 'orderId'
                }
              }
            },
            'map-Value': {
              'std-String': {
                'attributes': {
                  'value': 'Demo1002'
                }
              }
            }
          }
        ]
      }
    });
  });
});

describe('soapParser', () => {
  it('parses soap object and get the target value', () => {
    const obj = {
      'map-Map': {
        'map-Entry': [
          {
            'map-Key': {
              'std-String': {
                'attributes': {
                  'value': 'orderId'
                }
              }
            },
            'map-Value': {
              'std-String': {
                'attributes': {
                  'value': 'Demo1002'
                }
              }
            }
          }
        ]
      }
    };
    const orderId = soapParser(obj, ['orderId']);
    expect(orderId).toEqual({
      orderId: {
        'std-String': {
          'attributes': {
            'value': 'Demo1002'
          }
        }
      }
    });
  });
});

describe('getWSDL', () => {
  it('returns soap wsdl', async () => {
    const url = getWSDL('getOrderId');
    expect(url).toBe('https://localhost:8443/accounting/control/SOAPService/getOrderId?wsdl');
  });
});
