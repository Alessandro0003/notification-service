import { SendNotificaiton } from '@application/use-cases/send-notification';
import { InMemoryNotificationsRepository } from '../../src/in-memory-notification/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotificaiton = new SendNotificaiton(notificationsRepository);

    const { notification } = await sendNotificaiton.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
