import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ChatRoute extends Route {
  @service store;

  async model() {
    return await this.store.query('message', { sort: "-sent-at" })
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.resetMessage();
  }
}
