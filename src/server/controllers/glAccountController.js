import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getGlAccount(ctx, next) {
  const url = getWSDL('getGlAccount');
  const arg = soapCreator({
    'glAccountId': ctx.params.id,
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
    const result = await client.getGlAccount(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['glAccount']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

// 必传参数：accountName, glAccountClassId, glAccountId, glAccountTypeId, glResourceTypeId
export async function createGlAccount(ctx, next) {
  const url = getWSDL('createGlAccount');
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
    const result = await client.createGlAccount(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['glAccountId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updateGlAccount(ctx, next) {
  const url = getWSDL('updateGlAccount');
  const arg = soapCreator({
    'glAccountId': ctx.params.id,
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
    const result = await client.updateGlAccount(arg, {
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

export async function deleteGlAccount(ctx, next) {
  const url = getWSDL('deleteGlAccount');
  const arg = soapCreator({
    'glAccountId': ctx.params.id,
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
    const result = await client.deleteGlAccount(arg, {
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
