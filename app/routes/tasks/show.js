import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TasksShowRoute extends Route {
  @service store;

  async model({task_id}) {
    return this.store.findRecord('task', task_id);
  }
}
