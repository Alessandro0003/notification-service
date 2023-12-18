import { Notification } from '../../src/application/entities/notification';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications-repository';
import { CancelNotificaiton } from '../../src/application/use-cases/cancel-notification';
import { Content } from '@application/entities/content';
import { NotificationNotFound } from '../../src/application/use-cases/errors/notification-not-found';
import { makeNotification } from '@test/factories/notificaton-factory';

describe('Cancel notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotificaiton(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotificaiton(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
