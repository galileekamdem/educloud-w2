// index.js
exports.handler = async (event) => {
  // Récupère le message depuis le body POST ou les paramètres GET
  const body = event.body ? (() => { 
    try { return JSON.parse(event.body) } 
    catch(e) { return null } 
  })() : null;

  const message = body?.message 
    || (event.queryStringParameters && event.queryStringParameters.message) 
    || "Hello from Lambda!";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      timestamp: new Date().toISOString()
    })
  };
};
