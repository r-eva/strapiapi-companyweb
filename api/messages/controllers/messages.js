'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.messages.create(data, { files });
    } else {
      entity = await strapi.services.messages.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },
};