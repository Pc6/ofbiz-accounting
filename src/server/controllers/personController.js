import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getPerson(ctx, next) {
  const url = getWSDL('getAPerson');
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
    const result = await client.getAPerson(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['person']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

export async function createPerson(ctx, next) {
  const url = getWSDL('createPerson');
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
    const result = await client.createPerson(arg, {
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

export async function updatePerson(ctx, next) {
  const url = getWSDL('updatePerson');
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

export async function findPersons(ctx, next) {
  const url = getWSDL('findPersons');
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
    const result = await client.findPersons(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['persons']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}
