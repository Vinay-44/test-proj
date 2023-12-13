'use strict';

/**
 * homebanner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homebanner.homebanner');
