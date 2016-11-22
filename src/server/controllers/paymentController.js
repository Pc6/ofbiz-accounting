import soap from 'soap-as-promised';
import { soapCreator, soapParser, getWSDL } from '../utils/soapHelper';

// 必传参数： amount, partyIdFrom, partyIdTo, paymentTypeId, statusId
export async function createPayment(ctx, next) {
  const url = getWSDL('createPayment');
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
    const result = await client.createPayment(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['paymentId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updatePayment(ctx, next) {
  const url = getWSDL('updatePayment');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'paymentId': ctx.params.id,
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
    const result = await client.updatePayment(arg, {
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

export async function getPayment(ctx, next) {
  const url = getWSDL('getPayment');
  const arg = soapCreator({
    'paymentId': ctx.params.id,
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
    const result = await client.getPayment(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    // console.log(JSON.stringify(result));
    ctx.body = soapParser(result, ['payment', 'paymentApplications']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function getPaymentApplication(ctx, next) {
  const url = getWSDL('getPaymentApplication');
  const arg = soapCreator({
    'paymentApplicationId': ctx.params.appId,
    'login.username': 'admin',
    'login.password': 'ofbiz'
  });
  // console.log(JSON.stringify(arg));
  try {
    const client = await soap.createClient(url, {
      wsdl_options: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
      }
    });
    const result = await client.getPaymentApplication(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    // console.log(JSON.stringify(result));
    ctx.body = soapParser(result, ['paymentApplication']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function createPaymentApplication(ctx, next) {
  const url = getWSDL('createPaymentApplication');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'paymentId': ctx.params.id,
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
    const result = await client.createPaymentApplication(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    // console.log(JSON.stringify(result));
    ctx.body = soapParser(result, ['paymentApplicationId', 'amountApplied', 'paymentTypeId']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function updatePaymentApplication(ctx, next) {
  const url = getWSDL('updatePaymentApplication');
  const arg = soapCreator(Object.assign(ctx.request.body, {
    'paymentId': ctx.params.id,
    'paymentApplicationId': ctx.params.appId,
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
    const result = await client.updatePaymentApplication(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    // console.log(JSON.stringify(result));
    if (result) ctx.body = { message: 'success' };
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}

export async function removePaymentApplication(ctx, next) {
  const url = getWSDL('removePaymentApplication');
  const arg = soapCreator({
    'paymentApplicationId': ctx.params.appId,
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
    const result = await client.removePaymentApplication(arg, {
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

export async function findPayments(ctx, next) {
  const url = getWSDL('findPayments');
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
    const result = await client.findPayments(arg, {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    });
    ctx.body = soapParser(result, ['payments']);
    await next();
  } catch (err) {
    ctx.throw(err);
  }
}
