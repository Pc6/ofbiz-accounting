import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getAcctgTrans(ctx, next) {
  const url = getWSDL('getAcctgTrans');
  const arg = soapCreator({
    'acctgTransId': ctx.params.id,
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
    const result = await client.getAcctgTrans(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['acctgTrans']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

// 必传参数：acctgTransTypeId, glFiscalTypeId
export async function createAcctgTrans(ctx, next) {
  const url = getWSDL('createAcctgTrans');
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
    const result = await client.createAcctgTrans(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['acctgTransId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updateAcctgTrans(ctx, next) {
  const url = getWSDL('updateAcctgTrans');
  const arg = soapCreator({
    'acctgTransId': ctx.params.id,
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
    const result = await client.updateAcctgTrans(arg, {
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

export async function deleteAcctgTrans(ctx, next) {
  const url = getWSDL('deleteAcctgTrans');
  const arg = soapCreator({
    'acctgTransId': ctx.params.id,
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
    const result = await client.deleteAcctgTrans(arg, {
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

export async function findAcctgTrans(ctx, next) {
  const url = getWSDL('findAcctgTrans');
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
    const result = await client.findAcctgTrans(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['acctgTrans']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}
