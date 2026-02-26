import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksEditRoute extends Route {
  @service store;

  async model({task_id}) {
    return await this.store.findRecord('task', task_id);
  }
}
