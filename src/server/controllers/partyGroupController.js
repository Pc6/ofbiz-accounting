import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getPartyGroup(ctx, next) {
  const url = getWSDL('getPartyGroup');
  const arg = soapCreator({
    'partyId': ctx.params.id,
    'login.username': 'admin',
    'login.password': 'ofbiz'
  });
  try {
    const client = await soap.createClient(url, {
      wsdl_options: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
      }
    });
    const result = await client.getPartyGroup(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['partyGroup']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

// 必传参数：groupName
export async function createPartyGroup(ctx, next) {
  const url = getWSDL('createPartyGroup');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'login.username': 'admin',
    'login.password': 'ofbiz'
  }));
  try {
    const client = await soap.createClient(url, {
      wsdl_options: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
      }
    });
    const result = await client.createPartyGroup(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['partyId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updatePartyGroup(ctx, next) {
  const url = getWSDL('updatePartyGroup');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'partyId': ctx.params.id,
    'login.username': 'admin',
    'login.password': 'ofbiz'
  }));
  try {
    const client = await soap.createClient(url, {
      wsdl_options: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
      }
    });
    const result = await client.updatePartyGroup(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    if (result) ctx.body = { message: 'success' };
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}
