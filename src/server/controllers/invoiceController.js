import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

export async function getInvoice(ctx, next) {
  const url = getWSDL('getInvoice');
  const arg = soapCreator({
    'invoiceId': ctx.params.id,
    'login.username': 'admin',
    'login.password': 'ofbiz'
  });
  // console.log(url);
  try {
    const client = await soap.createClient(url, {
      wsdl_options: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
      }
    });
    const result = await client.getInvoice(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['invoice', 'invoiceItems']);
    await next();
  } catch (err) {
    ctx.throw(404, err);
  }
}

// 必传参数：partyId, partyIdFrom, invoiceTypeId
export async function createInvoice(ctx, next) {
  const url = getWSDL('createInvoice');
  // console.log(ctx.request.body);
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
    const result = await client.createInvoice(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['invoiceId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updateInvoice(ctx, next) {
  const url = getWSDL('updateInvoice');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'invoiceId': ctx.params.id,
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
    const result = await client.updateInvoice(arg, {
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

export async function createInvoiceItem(ctx, next) {
  const url = getWSDL('createInvoiceItem');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'invoiceId': ctx.params.id,
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
    const result = await client.createInvoiceItem(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['invoiceItemSeqId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updateInvoiceItem(ctx, next) {
  const url = getWSDL('updateInvoiceItem');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'invoiceId': ctx.params.id,
    'invoiceItemSeqId': ctx.params.seqId,
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
    const result = await client.updateInvoiceItem(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['invoiceId', 'invoiceItemSeqId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function removeInvoiceItem(ctx, next) {
  const url = getWSDL('removeInvoiceItem');
  const arg = soapCreator({
    'invoiceId': ctx.params.id,
    'invoiceItemSeqId': ctx.params.seqId,
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
    const result = await client.removeInvoiceItem(arg, {
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
