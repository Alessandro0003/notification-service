import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications-repository';
import { NotificationNotFound } from '../../src/application/use-cases/errors/notification-not-found';
import { makeNotification } from '@test/factories/notificaton-factory';
import { UnreadNotificaitons } from '../../src/application/use-cases/unread-notification';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadlNotification = new UnreadNotificaitons(
      notificationsRepository,
    );

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadlNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadlNotification = new UnreadNotificaitons(
      notificationsRepository,
    );

    expect(() => {
      return unreadlNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
