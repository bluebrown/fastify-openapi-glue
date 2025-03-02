/// <reference types="node" />

import { FastifyPluginAsync } from "fastify";

export interface FastifyOpenapiGlueOptions {
  specification: object | string;
  service: object;
  securityHandlers?: object;
  prefix?: string;
}

declare const fastifyOpenapiGlue: FastifyPluginAsync<FastifyOpenapiGlueOptions>;

export default fastifyOpenapiGlue;
export { fastifyOpenapiGlue };
