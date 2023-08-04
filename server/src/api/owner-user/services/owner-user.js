'use strict';

/**
 * owner-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owner-user.owner-user');
