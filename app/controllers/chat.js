import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ChatController extends Controller {
  @service store;
  @service router;

  @tracked sender = ""
  @tracked message;

  resetMessage() {
    this.message = this.store.createRecord('message');
  }

  @action
  reload() {
    this.router.refresh('chat');
  }

  @action
  async addMessage(event) {
    event.preventDefault();
    this.message.sentAt = new Date();
    this.message.sender = this.sender;
    await this.message.save();
    this.resetMessage();
    this.reload();
  }
}
