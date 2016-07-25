
'use strict'

/**
 * adonis-broccoli
 *
 * (c) Ryan Tablada <ryan.tablada@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const ServiceProvider = require('adonis-fold').ServiceProvider;

class BroccoliCommandProvider extends ServiceProvider {

  constructor() {
    super();
  }

  * register () {
    this.app.bind('App/Hello', function (app) {
      const Hello = require('./Hello')
      const Config = app.use('Config')
      return new Hello(Config)
    })
  }
}

module.exports = BroccoliCommandProvider
