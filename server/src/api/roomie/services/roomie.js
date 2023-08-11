'use strict';

/**
 * roomie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::roomie.roomie');
