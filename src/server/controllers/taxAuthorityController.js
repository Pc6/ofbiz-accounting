import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getTaxAuthority(ctx, next) {
  const url = getWSDL('getTaxAuthority');
  const arg = soapCreator(Object.assign(ctx.query, {
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
    const result = await client.getTaxAuthority(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['taxAuthority']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

export async function createTaxAuthority(ctx, next) {
  const url = getWSDL('createTaxAuthority');
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
    const result = await client.createTaxAuthority(arg, {
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

export async function updateTaxAuthority(ctx, next) {
  const url = getWSDL('updateTaxAuthority');
  const arg = soapCreator(Object.assign(ctx.query, ctx.request.body, {
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
    const result = await client.updateTaxAuthority(arg, {
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

export async function deleteTaxAuthority(ctx, next) {
  const url = getWSDL('deleteTaxAuthority');
  const arg = soapCreator(Object.assign(ctx.query, {
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
    const result = await client.deleteTaxAuthority(arg, {
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
