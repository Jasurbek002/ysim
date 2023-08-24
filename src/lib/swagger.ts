export let swaggerOption:any = {
  routePrefix: "/docx",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request: any, reply: any, next: any) {
      next();
    },
    preHandler: function (request: any, reply: any, next: any) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header: any) => header,
  transformSpecification: (swaggerObject: any, request: any, reply: any) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};
