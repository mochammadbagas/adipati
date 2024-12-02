const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"article":{"uri":"article","methods":["GET","HEAD"]},"article.show":{"uri":"article\/{article}","methods":["GET","HEAD"],"parameters":["article"],"bindings":{"article":"slug"}},"article.table":{"uri":"dashboard\/article","methods":["GET","HEAD"]},"article.create":{"uri":"dashboard\/article\/create","methods":["GET","HEAD"]},"article.store":{"uri":"dashboard\/article\/create","methods":["POST"]},"article.edit":{"uri":"dashboard\/article\/{article}\/edit","methods":["GET","HEAD"],"parameters":["article"],"bindings":{"article":"slug"}},"article.update":{"uri":"dashboard\/article\/{article}","methods":["PATCH"],"parameters":["article"],"bindings":{"article":"slug"}},"article.destroy":{"uri":"dashboard\/article\/{article}","methods":["DELETE"],"parameters":["article"],"bindings":{"article":"slug"}},"article.category":{"uri":"article\/category\/{category}","methods":["GET","HEAD"],"parameters":["category"],"bindings":{"category":"slug"}},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
