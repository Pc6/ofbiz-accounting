import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getGlReconciliation(ctx, next) {
  const url = getWSDL('getGlReconciliation');
  const arg = soapCreator({
    'glReconciliationId': ctx.params.id,
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
    const result = await client.getGlReconciliation(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['glReconciliation']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

// 必传参数：glReconciliationName
export async function createGlReconciliation(ctx, next) {
  const url = getWSDL('createGlReconciliatioon');
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
    const result = await client.createGlReconciliation(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['glReconciliationId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updateGlReconciliation(ctx, next) {
  const url = getWSDL('updateGlReconciliation');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'glReconciliationId': ctx.params.id,
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
    const result = await client.updateGlReconciliation(arg, {
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

export async function deleteGlReconciliation(ctx, next) {
  const url = getWSDL('deleteGlReconciliation');
  const arg = soapCreator({
    'glReconciliationId': ctx.params.id,
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
    const result = await client.deleteGlReconciliation(arg, {
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
