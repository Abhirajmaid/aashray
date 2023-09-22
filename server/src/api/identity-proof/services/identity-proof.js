'use strict';

/**
 * identity-proof service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::identity-proof.identity-proof');
